document.addEventListener('DOMContentLoaded', () =>{

  const hamburger = document.querySelector('.hamburger')
  const close = document.querySelector('.close')
  const navigationLinks = document.querySelector('.navigation-links-container-mobile')
  const navigationBar = document.querySelector('.navigation-bar')

  hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none'
    close.style.display = 'block'
    navigationLinks.style.display = 'flex'
    navigationBar.style.position = 'sticky'
    navigationBar.style.top = '0'
  })

  close.addEventListener('click', () => {
    restore()
  })

  window.addEventListener('resize', (e) => {
    restore()
  });

  const restore = () => {
    hamburger.style.display = ''
    close.style.display = ''
    navigationLinks.style.display = ''
    navigationBar.style.position = ''
    navigationBar.style.top = ''
  }
  
})

