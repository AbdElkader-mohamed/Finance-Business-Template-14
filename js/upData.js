import {reveal} from "./animation.js"
export async function getData(url,target) {
  let response = await fetch(url)
  response = await response.json();
  renderELements(response.services,target);
  if (target.parentElement.parentElement.id == "team-data") renderTeamData(response.team,target)
reveal(document.querySelectorAll(".reveal"),50)
}
// data services 
function renderELements(response,target) {
  let newData = response.map(data => {
    let {img, head,content,link,linkContent} = data;
    return `
  <div class="col-lg-4 col-md-6 gx-5 reveal">
    <div class="mb-5 mb-lg-0 ">
      <div class="img-Card-hold" >
        <img src="${img}" class="img-fluid rounded-top-3 img-Card" alt="">
        <div><h4>${head}</h4></div>
      </div>
      <div>
        <div class="mainCard rounded-bottom-3">
          <h4 class="reveal" >${head}</h4>
          <p class="reveal">${content}</p>
          <a href="${link}" class="btn mainBtn mainBtn--solid reveal">${linkContent}</a>
        </div>
      </div>
    </div>
  </div>
  `
  });
  target.innerHTML = newData.join("") ;
}
// data about team 
function renderTeamData(response,target) {
  let newData = response.map(data => {
    let {img,job, name,content} = data
    return `
    <div class="col-lg-4 col-md-6 gx-5 reveal">
    <div class="mb-5 mb-lg-0" >
      <div class="img-Card-hold">
        <img src="${img}" class="img-fluid rounded-top-3 img-Card" alt="">
        <div><h4>${name}</h4></div>
      </div>
      <div>
        <div class="mainCard rounded-bottom-3">
          <h4 class="reveal" >${name}</h4>
          <span class="reveal" >${job}</span>
          <p class="reveal" >${content}</p>
        </div>
      </div>
    </div>
  </div>
  `
});
target.innerHTML = newData.join("") ;
}