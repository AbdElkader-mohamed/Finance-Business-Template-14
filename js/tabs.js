import {draggableSlid} from './draggable-slid.js'
// handel draggable slid banner
draggableSlid(document.getElementById("banner"));

async function getTabsData() {
  let data = await fetch("https://abdelkader-mohamed.github.io/my-data-/finance-business/finance-business.json");
  data = await data.json();
  dataBtns(data.tabsData)
  dataTabs(data.tabsData)
}
getTabsData()

function dataBtns(data) {
  data = data.map(btnInfo => {
    let atr = btnInfo.tabHead.split(" ")[0].toLowerCase();
    return `
    <button class="btn tab-btn" data-target="${atr}"><h2>${btnInfo.tabHead}<i class="bi bi-chevron-right"></i></h2></button>
    ` ;
  });
  document.querySelector("#tab-btns").innerHTML = data.join("") ;
}
function dataTabs(data) {
  data = data.map(tabInfo => {
    let atr = tabInfo.tabHead.split(" ")[0].toLowerCase();
    return `
    <div class=" tab-body" id="${atr}" >
    <div>
      <img src="${tabInfo.tabImg}" class="img-fluid" alt="">
    </div>
    <div class="mt-4">
      <h4>${tabInfo.tabHead}</h4>
      <p class="mb-40">${tabInfo.tabContent1}</p>
      <p>${tabInfo.tabContent2}</p>
    </div>
  </div>
    ` ;
  })
  document.querySelector("#tab-list").innerHTML = data.join("") ;
  activationTabs();
}

// taps handel logic
function activationTabs() {
  const tabBtn = document.querySelectorAll("#tab-btns .tab-btn");
  const tabBody = document.querySelectorAll(".tab-body");
  tabBtn[0].classList.add("active");
  tabBody[0].classList.add("active");
  tabBtn.forEach(item => {
    item.onclick = _ => {
      tabBtn.forEach(item => item.classList.remove("active"));
      item.classList.add("active");
      tabBody.forEach(item => item.classList.remove("active"));
      document.getElementById(item.dataset.target).classList.add("active")
    }
  });
}