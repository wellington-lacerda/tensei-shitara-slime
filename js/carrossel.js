export function scrollFull(){
  const radio = document.querySelectorAll(".carrossel input")
  const circle = document.querySelectorAll(".carrossel .rounded-circle")
  const btns = document.querySelectorAll(".carrossel .btn-group") 
  const imgMobile = document.querySelector(".mobile-home")
  const imgDesktop = document.querySelector(".desktop-home")
  const pageLink = document.querySelector(".page-link")
  const txtName = document.querySelector(".page-link .txt-name")
  
  let pos = 0
  let intervalId

  const atualizarSlide = (novoIndex) => {
    pos = novoIndex
    if (pos >= radio.length) pos = 0
    if (pos < 0) pos = radio.length - 1

    radio[pos].checked = true
    radio[pos].dispatchEvent(new Event('change'))
  }

  const iniciarIntervalo = () => {
    intervalId = setInterval(() => {
      atualizarSlide(pos + 1)
    }, 4000)
  }

  // Reinicia o timer ao interagir manualmente para evitar conflitos
  const resetIntervalo = () => {
    clearInterval(intervalId)
    iniciarIntervalo()
  }

  iniciarIntervalo()

  // Correção para iterar corretamente sobre os botões de navegação
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      resetIntervalo()
      if (btn.classList.contains("prev")) {
        atualizarSlide(pos - 1)
      } else {
        atualizarSlide(pos + 1)
      }
    })
  })

  radio.forEach((rad, i) => {
    rad.addEventListener("change", () => {
      circle.forEach(label => {
        label.classList.remove("circle-active")
      })
      pos = i
      if (circle[i]) circle[i].classList.add("circle-active")
      
      switch (pos) {
        case 0:
          trocarImagem('assets/images/bg-home-rimuru-mobile.jpg', 'assets/images/bg-home-rimuru-desktop.jpg');
          pageLink.href = 'pages/rimuru.html'
          txtName.innerText = "Conheça a história de Rimuru"
          break;
        case 1: 
          trocarImagem('assets/images/bg-home-milin-mobile.jpg', 'assets/images/bg-home-milin-desktop.jpg');
          pageLink.href = 'pages/milin.html'
          txtName.innerText = "Conheça a história de Milin"
          break;
        case 2:
          trocarImagem('assets/images/bg-home-diablo-mobile.jpg', 'assets/images/bg-home-diablo-desktop.jpg');
          pageLink.href = 'pages/diablo.html'
          txtName.innerText = "Conheça a história de Diablo"
          break;
      }

      function trocarImagem(novoMobile, novoDesktop) {
        imgMobile.classList.add("fade-out");
        imgDesktop.classList.add("fade-out");
        setTimeout(() => {
          imgMobile.srcset = novoMobile;
          imgDesktop.src = novoDesktop;
          imgMobile.classList.remove("fade-out");
          imgDesktop.classList.remove("fade-out");
        }, 250);
      }

    })
  })
}
