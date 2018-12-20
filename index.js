// HTML
// <input>
// <button> for the toggles or <nav> or <input type="radio">
// <div> for the right-hand side

// CSS 
// CSS grid, two column grid (left and right side), one row for header 
// Flexbox
// background-image
// class or id for toggles 

// JS 
// 1. Form
// event listener for typing

const firstNameInput = document.querySelector('#first-name-input')
firstNameInput.onkeyup = function() {
  const initials = document.querySelector('#initials')
  const names = document.querySelector('#names')
  initials.innerText = firstNameInput.value[0]
  names.innerText = firstNameInput.value
  
  if (firstNameInput.value[0] === undefined && secondNameInput.value[0] === undefined) {
    initials.innerText = ''
  } else if (firstNameInput.value[0] === undefined) {
    initials.innerText = '' + ' + ' + secondNameInput.value[0]
  }
}

const secondNameInput = document.querySelector('#second-name-input')
secondNameInput.onkeyup = function() {
  const initials = document.querySelector('#initials')
  const names = document.querySelector('#names')
  initials.innerText = firstNameInput.value[0] + ' + ' + secondNameInput.value[0]
  names.innerText = firstNameInput.value + ' + ' + secondNameInput.value
  
  if (firstNameInput.value[0] === undefined && secondNameInput.value[0] === undefined) {
    initials.innerText = ''
  } else if (secondNameInput.value[0] === undefined) {
    initials.innerText = firstNameInput.value[0] + ' + ' + ''
  }
}

const lastNameInput = document.querySelector('#last-name-input')
lastNameInput.onkeyup = function() {
  const lastName = document.querySelector('#last-name')
  lastName.innerHTML = lastNameInput.value
}

const dateInput = document.querySelector('#date-input')
dateInput.onkeyup = function() {
  const date = document.querySelector('#date')
  date.innerHTML = dateInput.value
}

const weddingLocationInput = document.querySelector('#wedding-location-input')
weddingLocationInput.onkeyup = function() {
  const weddingLocation = document.querySelector('#wedding-location')
  weddingLocation.innerHTML = weddingLocationInput.value
}


// 2. Styling (toggling between styles)
// onClick on button/div/whatever, the style changes for invitation 

const formalButton = document.querySelector('#formal')
const springButton = document.querySelector('#spring')
const artDecoButton = document.querySelector('#art-deco')
const invitation = document.querySelector('.invitation')

formalButton.onclick = function() {
  invitation.classList.remove('spring-toggle', 'art-deco-toggle')
  invitation.classList.toggle('formal-toggle')
}

springButton.onclick = function() {
  invitation.classList.remove('formal-toggle', 'art-deco-toggle')
  invitation.classList.toggle('spring-toggle')
}

artDecoButton.onclick = function() {
  invitation.classList.remove('formal-toggle', 'spring-toggle')
  invitation.classList.toggle('art-deco-toggle')
}



