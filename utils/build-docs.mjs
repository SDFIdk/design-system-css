import { open, readdir } from 'node:fs/promises'
import esbuild from 'esbuild'

async function readHTML(path) {
  let filehandle
  let html = ''
  try {
    filehandle = await open(path, 'r+')
    filehandle.readFile('utf8').then(function(contents) {
      html += contents
    })
  } catch (error) {
    console.error('there was an error:', error.message)
  } finally {
    await filehandle?.close()
    return html
  }
}

async function writeHTML(file, html) {
  let filehandle
  try {
    filehandle = await open(file, 'w')
    filehandle.writeFile(html, 'utf8').then(function() {
      // File was written
    })
  } catch (error) {
    console.error('there was an error:', error.message)
  } finally {
    await filehandle?.close()
  }
}

async function updateIconHTML(outputfile) {
  const CSSdir = 'node_modules/design-system-icons/css'
  let html_snippets = '<ul class="ds-grid icon-list">'

  try {
    const CSSfiles = await readdir(CSSdir)
    for (const file of CSSfiles) {
      const shortname = file.replace('.css', '')
      html_snippets += `<li class="icon"><span class="ds-icon-${ shortname }"></span><code>&lt;span class="ds-icon-${ shortname }">&lt;/span></code></li>`
    }
  } catch (err) {
    console.error(err)
  }

  html_snippets += '</ul>'
  await writeHTML(outputfile, html_snippets)
}

console.log('Building docs')

// Build icon CSS from node_modules/design-system-icons
esbuild.build({
  entryPoints: ['node_modules/design-system-icons/index.css'],
  bundle: true,
  minify: true,
  outfile: 'docs/css/icons.css'
}).catch(
  () => process.exit(1)
)

// Build HTML

const docs_dir = 'src/docs/content'
let markup = ''

markup += await readHTML('src/docs/layout/header.html')

try {
  const files = await readdir(docs_dir)
  for (const file of files) {
    markup += await readHTML(`${ docs_dir }/${ file }`)
  }
} catch (err) {
  console.error(err)
} 

markup += await readHTML('src/docs/layout/footer.html')

await writeHTML('docs/index.html', markup)

console.log('Done 👍')
