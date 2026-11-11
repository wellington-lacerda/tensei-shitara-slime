export function clickMenu() {
  const menu = document.querySelector(".menu")
  const iconMenu = document.querySelector(".menu-img")
  const navbar = document.querySelector("header .navbar")

  if (!menu || !iconMenu || !navbar) return

  menu.addEventListener("click", () => {
    if (!navbar.classList.contains("nav-active")) {
      navbar.classList.add("nav-active")
      iconMenu.src = "assets/images/close-x.svg"
    } else {
      navbar.classList.remove("nav-active")
      iconMenu.src = "assets/images/menu-hamburguer.svg"
    }
  })
}
export function scrollView(){
  document.querySelectorAll('header a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const navbar = document.querySelector(".navbar")
        const iconMenu = document.querySelector(".menu-img")
        
        navbar.classList.remove("nav-active")
        iconMenu.src = "assets/images/menu-hamburguer.svg"
        
        const targetId = this.getAttribute('href')
        const targetElement = document.querySelector(targetId)
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    })
  })
}
