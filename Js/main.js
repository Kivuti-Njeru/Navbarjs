const toggleBtn = document.querySelector('[data-toggleBtn]')
const navLinks = document.querySelector('[data-navLinks]')

const openNav = document.querySelector('[data-open]')
const closeNav = document.querySelector('[data-close]')

toggleBtn.addEventListener('click', (e) => {

    let active  = 'active'
    let animate  = 'animate'
    let reanimate  = 'reanimate'

    // using dom method toggle()

    navLinks.classList.toggle(active)
    openNav.classList.toggle(animate)
    closeNav.classList.toggle(reanimate)

    // if statement using the ternary operator to toggle
    
    // navLinks.classList.contains(active)?
    // navLinks.classList.remove(active) :
    // navLinks.classList.add(active)

})