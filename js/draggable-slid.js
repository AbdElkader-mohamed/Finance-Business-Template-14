// testimonials data 
export function renderDataTestimonials(data) {
  let newData = data.map(data => {
    let {img, name, job, content} = data  ;
    return `
    <div class="item">
      <div class="card-count card--user" >
        <h5>${name}</h5>
        <span>${job}</span>
        <p>${content}</p>
      </div>
      <div class="text-center position-relative user-img-hold" >
        <img src="${img}" class="img-fluid user-img" alt="" draggable="false">
      </div>
    </div>
    `;
  })
  document.querySelector(".testimonials").innerHTML = newData.join("")  
  draggableSlid(document.getElementById("draggableSlid"));
}

// testimonials draggableSlid
export function draggableSlid(draggableSlid) {
  let firstItemWidth = draggableSlid.querySelector(".item").offsetWidth;
  let slidChildren = [...draggableSlid.children]
  let isDragging = false , startX,startScrollLeft;
  let itemParView = Math.round(draggableSlid.offsetWidth / firstItemWidth);

slidChildren.slice(-itemParView).reverse().forEach(item => {
  draggableSlid.insertAdjacentHTML("afterbegin", item.outerHTML);
})
slidChildren.slice( 0 ,itemParView).forEach(item => {
  draggableSlid.insertAdjacentHTML("beforeend", item.outerHTML);
})
const dragStart = (e) => {
  isDragging = true;
  draggableSlid.classList.add("dragging")
  startX = e.pageX;
  startScrollLeft = draggableSlid.scrollLeft;
}
const dragging = (e) => {
  if (!isDragging) return ;
  draggableSlid.scrollLeft = startScrollLeft - (e.pageX - startX)
}
const stopDrag = () => {
  isDragging = false;
  draggableSlid.classList.remove("dragging");
}
const autoPlay = () => {setInterval(() => draggableSlid.scrollLeft += firstItemWidth,3000)}
autoPlay()
const infinite = () => {
  if (draggableSlid.scrollLeft === 0) {
    draggableSlid.classList.add("noBehavior");
    draggableSlid.scrollLeft = draggableSlid.scrollWidth - (2 * draggableSlid.offsetWidth);
    draggableSlid.classList.remove("noBehavior");
  }else if (Math.ceil(draggableSlid.scrollLeft) >= draggableSlid.scrollWidth - draggableSlid.offsetWidth){
    draggableSlid.classList.add("noBehavior");
    draggableSlid.scrollLeft = draggableSlid.offsetWidth;
    draggableSlid.classList.remove("noBehavior");
  }
}
draggableSlid.addEventListener("mousedown",dragStart)
draggableSlid.addEventListener("mousemove",dragging)
draggableSlid.addEventListener("mouseup",stopDrag)
draggableSlid.addEventListener("scroll",infinite)
}