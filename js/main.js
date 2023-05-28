// handel navbar
function handelMdNavMenu() {
  const navbarBtn = document.querySelector(".navbar-toggler") ;
  navbarBtn.onclick = function() {document.getElementById(this.dataset.target).classList.toggle("active")}
  document.querySelector(".navbar-toggler").onclick = function(){
    document.getElementById(this.dataset.target).classList.toggle("active");
    this.classList.toggle("rotate")
    const span = this.querySelectorAll("span")
      span[0].classList.toggle("rotate-mains")
      span[1].classList.toggle("opacity")
      span[2].classList.toggle("rotate-plus")
  }
}
handelMdNavMenu()
// handel nav position 
function fixedNav() {
  const header = document.querySelector("header");
  window.onscroll = _ => {
    navPos()
  }
  navPos()
  function navPos() {
    if(scrollY >= 100 && header.classList.contains("one") == false) header.classList.add("fixedNav");
    else if (scrollY >= 550) header.classList.add("fixedNav");
    else header.classList.remove("fixedNav");
  }
}
fixedNav()
//handel loader
function loader() {
  const loader = document.querySelector(".loader") ;
  window.addEventListener("load",_=> {
  loader.classList.add("hidden");
  loader.addEventListener("transitionend", _=> loader.remove())
  })
}
loader()
//handel scroll-to-top
function scrollToTop() {
  const scrollBtn = document.querySelector(".scroll-to-top") ;
  window.addEventListener("scroll", _ => {
    if (scrollY >= 450) scrollBtn.classList.add("active");
    else scrollBtn.classList.remove("active");
  })
  scrollBtn.addEventListener("click", _=> scrollTo({top:0,behavior:"smooth"}))
}
scrollToTop()
//handel scroll bar progress
function scrollProgress() {
  const scrollBar = document.querySelector(".scrollBar") ;
  window.addEventListener("scroll", _=> {
    let hight =( document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100 ;
    scrollBar.style.width = hight + "%" ;
  })
}
scrollProgress()
