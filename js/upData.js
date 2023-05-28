export async function getData(url,target) {
  let response = await fetch(url)
  response = await response.json();
  renderELements(response.services,target);
  if (target.parentElement.parentElement.id == "team-data") renderTeamData(response.team,target)
}
// data services 
function renderELements(response,target) {
  let newData = response.map(data => {
    let {img, head,content,link,linkContent} = data
    return `
    <div class="col-lg-4 col-md-6 gx-5">
    <div class="mb-5 mb-lg-0" >
      <div>
        <img src="${img}" class="img-fluid rounded-top-3 img-Card" alt="">
      </div>
      <div>
        <div class="mainCard rounded-bottom-3">
          <h4>${head}</h4>
          <p>${content}</p>
          <a href="${link}" class="btn mainBtn mainBtn--solid">${linkContent}</a>
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
    <div class="col-lg-4 col-md-6 gx-5">
    <div class="mb-5 mb-lg-0" >
      <div>
        <img src="${img}" class="img-fluid rounded-top-3 img-Card" alt="">
      </div>
      <div>
        <div class="mainCard rounded-bottom-3">
          <h4>${name}</h4>
          <span>${job}</span>
          <p>${content}</p>
        </div>
      </div>
    </div>
  </div>
  `
});
target.innerHTML = newData.join("") ;
}