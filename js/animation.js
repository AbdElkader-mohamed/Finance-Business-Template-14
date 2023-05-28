export function reveal(reveals,point) {
  function revealElement() {
    reveals.forEach(revealElement => {
      const elementTop = revealElement.getBoundingClientRect().top;
      let hight = window.innerHeight;
      if (elementTop < hight - point) revealElement.classList.add("active");
      })
    }
    window.addEventListener("scroll", _=> {
      revealElement()
    })
    revealElement()
}