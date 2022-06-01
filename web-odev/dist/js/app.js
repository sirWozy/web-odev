const navbarOpen = document.querySelector('#navbar-toggler-open')
const navbarClose = document.querySelector('.navbar-toggler-close')
const navbar = document.querySelector('.navbar')

navbarOpen.addEventListener('click', (e) => {
  e.preventDefault()
  toggleNavbar(navbar)
})
navbarClose.addEventListener('click', (e) => {
  e.preventDefault()
  toggleNavbar(navbar)
})

function toggleNavbar(element) {
  element.classList.toggle('active')
}
