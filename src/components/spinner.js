/** Displays a loading animation */
export class Spinner extends HTMLElement {


  // Properties
  style = `
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    svg {
      width: 100%;
      height: auto;
    }
    
  `
  template = `
    <style>${ this.style }</style>
    <svg class="ds-loading-svg" version="1.1" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <style>
        .ds-loading-svg .ds-loading-circle {
          fill: hsl(186,100%,12%);
          animation: 2s infinite alternate pulse;
        }
        .ds-loading-svg .ds-loading-circle:nth-child(1) {
          animation-delay: 1.75s;
        }
        .ds-loading-svg .ds-loading-circle:nth-child(2) {
          animation-delay: 1.5s;
        }
        .ds-loading-svg .ds-loading-circle:nth-child(3) {
          animation-delay: 1.25s;
        }
        .ds-loading-svg .ds-loading-circle:nth-child(4) {
          animation-delay: 1s;
        }
        .ds-loading-svg .ds-loading-circle:nth-child(5) {
          animation-delay: 0.75s;
        }
        .ds-loading-svg .ds-loading-circle:nth-child(6) {
          animation-delay: 0.5s;
        }
        .ds-loading-svg .ds-loading-circle:nth-child(7) {
          animation-delay: 0.25s;
        }

        @keyframes pulse {
          from {
            fill: hsl(186,100%,12%);
          }
          to {
            fill: hsla(0,100%,100%);
          }
        }
      </style>
      <circle class="ds-loading-circle" cx="50" cy="50" r="45" />
      <circle class="ds-loading-circle" cx="50" cy="50" r="40" />
      <circle class="ds-loading-circle" cx="50" cy="50" r="35" />
      <circle class="ds-loading-circle" cx="50" cy="50" r="30" />
      <circle class="ds-loading-circle" cx="50" cy="50" r="25" />
      <circle class="ds-loading-circle" cx="50" cy="50" r="20" />
      <circle class="ds-loading-circle" cx="50" cy="50" r="15" />
      <circle class="ds-loading-circle" cx="50" cy="50" r="10" />
    </svg>
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
    this.createShadowDOM()
  }


  // Methods

  createShadowDOM() {
    // Create a shadow root
    this.attachShadow({mode: 'open'}) // sets and returns 'this.shadowRoot'
    
    // Attach the elements to the shadow DOM
    this.shadowRoot.innerHTML = this.template
  }

}
