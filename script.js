const form = document.getElementById('parking-form')
const name = document.getElementById('name-field')
const carname = document.getElementById('car-field')

const date = document.getElementById('start-date-field')
const days = document.getElementById('days-field')

const creditcard = document.getElementById('credit-card-field')
const cvv = document.getElementById('cvv-field')

const expiration = document.getElementById('expiration-field')

form.addEventListener('submit-button', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (carname.value === '' || carname.value == null) {
    messages.push('Car Name is required')
  }

  if (date.value === '' || date.value == null) {
    messages.push('Date is required')
  }

  if (days.value === '' || days.value == null) {
    messages.push('Days is required')
  }

  if (creditcard.value === '' || creditcard.value == null) {
    messages.push('Days is required')
  }

  if (cvv.value === '' || cvv.value == null) {
    messages.push('Days is required')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(',')
  }
})