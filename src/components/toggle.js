/** A button that toggles a togglePanel */
class ToggleBtn extends HTMLElement {

  // Properties
  template = `
    <button>
      <slot>
        Toggle a thing
      </slot>
    </button>
  `

  // Methods
  createDOM() {
    // Attach the template to the DOM
    this.innerHTML = this.template
  }

  // Lifecycle events

  connectedCallback() {
    this.createDOM()

    const button_element = this.querySelector('button')
    const panel_element = document.querySelector(`#${ this.getAttribute('for') }`)
    
    button_element.addEventListener('click', function() {
      panel_element.hidden = !panel_element.hidden
    })
  }

}


/** A content panel that can be hidden/displayed by a toggle */
class TogglePanel extends HTMLElement {

  // Properties
  style = `
    :host([hidden]) {
      display: block !important;
      transform: translate(-100%);
    }
    :host {
      position: fixed;
      left: 0;
      top: 0;
      height: 100%;
      max-width: 100%;
      background-color: var(--background-color);
      padding: var(--padding);
      transition: transform 0.3s;
      transform: translate(0);
    }
  `
  template = `
    <style>${ this.style }</style>
    <slot>
      <p>This is the default content to toggle</p>
    </slot>
  `

  // Getters
  static get observedAttributes() { 
    return [
      'hidden'
    ]
  }

  // Constructor
  constructor() {
    super()
  }

  // Methods
  createShadowDOM() {
    // Create a shadow root
    this.attachShadow({mode: 'open'}) // sets and returns 'this.shadowRoot'
    
    // Attach the elements to the shadow DOM
    this.shadowRoot.innerHTML = this.template
  }

  // Lifecycle events
  connectedCallback() {

    this.createShadowDOM()
    this.hidden = true

    // If a button with class `btn-close` is present, use it to close the panel.
    const close_btn_element = this.querySelector('.btn-close')
    if (close_btn_element) {
      close_btn_element.addEventListener('click', () => {
        this.hidden = true
      })
    }
  }

}

export {
  ToggleBtn,
  TogglePanel
}
