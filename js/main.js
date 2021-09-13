const menu = document.querySelector('.menu')
const tops = document.querySelector('.top')
const nav_links = document.querySelector('.nav-links')
const nav = document.querySelector('.nav')
const opacity = 0.3

const big_image = document.querySelector('.big-image img')
const small_images = document.querySelectorAll('.small-images img')

small_images.forEach((img) => img.addEventListener('click', showImage))
small_images[0].style.opacity = opacity

function showImage(e) {
    big_image.src = e.target.src
    small_images.forEach((img) => (img.style.opacity = 1))
}

menu.addEventListener('click', () => {
    nav_links.classList.toggle('open')
})

window.onscroll = function() {
    let top = window.scrollY

    if (top >= 50) {
        nav.classList.add('active-nav')
    } else {
        nav.classList.remove('active-nav')
    }

    if (top >= 100) {
        tops.style = 'Display:block'
    } else {
        tops.style = 'Display:none'
    }
}

function footerDate() {
    const span = document.querySelector('.year')
    let currentYear = new Date().getFullYear()

    span.textContent = currentYear
}
footerDate()