import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-movie"
export default class extends Controller {
  static targets = ['infos', 'form']

  connect() {

  }

  displayForm() {
    this.formTarget.classList.remove('d-none')
    this.infosTarget.classList.add('d-none')
  }

  update(event) {
    event.preventDefault()
    fetch(this.formTarget.action, {
      body: new FormData(this.formTarget),
      headers: { Accept: 'text/plain' },
      method: 'PATCH'
    })
      .then(response => response.text())
      .then((data) => {
        this.element.outerHTML = data
      })
  }
}
