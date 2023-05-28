import {} from './home.js'
import {renderDataTestimonials,draggableSlid} from './draggable-slid.js'

//scroll to target section
function targetSection() {
  let links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    link.addEventListener("click",function() {
      window.scrollTo({
        top:document.getElementById(this.dataset.target).offsetTop,
        behavior:"smooth"
      })
    })
  })
}
targetSection()
// handel scroll spy 
function scrollSpy() {
  let sections = document.querySelectorAll("#scrollSpy .target");
  let links = document.querySelectorAll("#navbarNav .nav-link")
  window.addEventListener("scroll", function(){
  sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 130 && window.scrollY < section.offsetTop - 130 + section.offsetHeight ){
        links.forEach(link => {
          link.classList.remove("active");
          document.querySelector(`.nav-link[data-target=${section.getAttribute("id")}]`).classList.add("active")
        })
      } 
    })
  })
}
scrollSpy()

// handel data testimonials && handel draggable slid // render from draggable-slid.js
async function getDataTestimonials() {
  let data = await fetch(`https://abdelkader-mohamed.github.io/my-data-/finance-business/finance-business.json`);
  data = await data.json();
  renderDataTestimonials(data.team);
}
getDataTestimonials();
// handel draggable slid banner
draggableSlid(document.getElementById("banner"))

// Handel slider 
export function SlidShow() {
  let slider = document.querySelector(".slider");
  let imgs = document.querySelectorAll(".item-slider");
  let carousel = document.querySelector(".carousel");
  let direction ;
  document.querySelector("#next").onclick = _ => {
    direction = -1;
    slider.style.justifyContent = "flex-start";
    carousel.style.transform = `translate(-${100 / imgs.length}%)`;
  }
  setInterval(_=> {document.querySelector("#next").click()},8000)
  document.querySelector("#prev").onclick = _ => {
    if (direction === -1) {
      carousel.appendChild(carousel.firstElementChild);
      direction = 1;
    }
    direction = 1;
    slider.style.justifyContent = "flex-end";
    carousel.style.transform = `translate(${100 / imgs.length}%)`;
  }
  carousel.addEventListener("transitionend", _ => {
    if (direction === -1) carousel.appendChild(carousel.firstElementChild);
    else if(direction === 1) carousel.prepend(carousel.lastElementChild);
    carousel.style.transition = 'none';
    carousel.style.transform = 'translate(0)';
    setTimeout(_=>carousel.style.transition = 'all 1s')
  })
}
SlidShow()