/** A class for buttons that toggle a togglePanel */
class ToggleBtn {

  constructor(element) {
    const event = new Event(`toggle-${ element.getAttribute('aria-controls') }`, {bubbles: true})
    element.addEventListener('click', () => {
      element.dispatchEvent(event)
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

    document.addEventListener(`toggle-${ this.id }`, () => {
      this.hidden = !this.hidden
    })

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
