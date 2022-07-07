import * as fs from 'node:fs'

var file_path = 'assets/designsystem.css'
let css_content = ''

var file_data = fs.readFileSync(file_path, "UTF-8")

css_content = file_data

const regex = /node_modules\/design-system-icons\/icons\/.*\.svg/g
const found = css_content.match(regex)

for (let uri in found) {
  var svg_data = fs.readFileSync(found[uri], "UTF-8")

  console.log(svg_data)
  const svg_string = `data:image/svg+xml;utf8,${ svg_data }`
  css_content.replace(found[uri], svg_string)
    
}
console.log(css_content)

fs.writeFileSync(file_path, css_content)
