// TODO: Make tabs render according to hash in URL (`location.hash`)

/** Converts part of a DOM into a tabs interface */
class Tabs {

  // Properties
  tabs
  tab_buttons
  tab_panels

  constructor(target) {
    this.tabs = target
    this.tab_buttons = this.tabs.querySelectorAll('.ds-nav-tabs a')
    this.tab_panels = this.tabs.querySelectorAll('.ds-tab-panel')
    this.render(this.tab_panels[0].id)

    this.tabs.querySelector('.ds-nav-tabs').addEventListener('click', (event) => {
      this.render(event.target.getAttribute('href'))
    })
  }

  render(id) {

    this.tab_panels.forEach(function(panel) {
      if (panel.id === id) {
        panel.hidden = false
      } else {
        panel.hidden = true
      }
    })

    this.tab_buttons.forEach(btn => {
      if (btn.href.includes(id)) {
        btn.classList.add('active')
      } else {
        btn.classList.remove('active')
      }
    })
  }

}

export {
  Tabs
}
