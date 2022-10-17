class CodeExample extends HTMLElement {

  // public properties
  template = `
    <label>Eksempel</label>
    <pre><code class="language-html"></code></pre>
  `

  constructor() {
    super()
  }

  connectedCallback() {
    let snippet = document.getElementById(this.dataset.snip).cloneNode(true).innerHTML
    const regex = /\u0020{2,}/g;
  
    const container = document.createElement('p')
    container.innerHTML = this.template
    this.append(container)
    this.querySelector('code').textContent = snippet.replaceAll(regex, '').trim()
  }
}

customElements.define('code-example', CodeExample)
