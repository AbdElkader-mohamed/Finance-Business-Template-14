// set data counter 
export function setDigitCount(data) {
  let newArr = data.map(data => {
    let {goal , title} = data
    return `
    <div class="col-md-6">
      <div class="card-count" >
        <h2 class="digit" data-goal="${goal}">000</h2>
        <h4>${title}</h4>
      </div>
    </div>
    `
  })
  document.getElementById("data-count").innerHTML = newArr.join("")
}
// set data counter 
export function setFan(data,target) {
let {smTitle,smTitle2, head, em,content1,content2,link,linkContent,img,img2} = data;
if (target.id === "more-info") document.querySelector(".more-info-img").src = img ;
target.innerHTML = `
<span class="mb-3 smTitle">${smTitle}</span>
  <h2 class="mb-4">${head} <em>${em}</em></h2>
  <p class="mb-5">
    ${content1}
    <br>
    <br>
    ${content2}
    </p>
    <a href="${link}" class="btn mainBtn mainBtn--solid mb-3">${linkContent}</a>
    `
    if (target.classList.contains("change--img")){
      target.style.background = 'white';
      document.querySelector(".more-info-img").src = img2 ;
      document.querySelector(".smTitle").textContent = smTitle2
    } 
}