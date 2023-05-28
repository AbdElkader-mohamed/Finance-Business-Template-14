import {setDigitCount ,setFan} from './data.js';
import {getData} from './upData.js';
import {countDown} from './scrolling-countDown.js';
import {renderDataTestimonials,draggableSlid} from './draggable-slid.js'

// get data counter  // render from data.js
async function dataAbout() {
  let data = await fetch(`https://abdelkader-mohamed.github.io/my-data-/finance-business/finance-business.json`)
  data = await data.json()
  setDigitCount(data.data[0][0])
  setFan(data.data[0][1][0],document.getElementById("fan-facts"))
  setFan(data.data[0][1][1],document.getElementById("more-info"))
}
dataAbout();


// render from upData.js // up data to services cards
let url = `https://abdelkader-mohamed.github.io/my-data-/finance-business/finance-business.json`;
let target = document.querySelector("#team-data .parent");
getData(url,target);

// turn on count Down in target section 
countDown(document.querySelector(".count-down"));

// handel data testimonials && handel draggable slid // render from draggable-slid.js
async function getDataTestimonials() {
  let data = await fetch(`https://abdelkader-mohamed.github.io/my-data-/finance-business/finance-business.json`);
  data = await data.json();
  renderDataTestimonials(data.team);
}
getDataTestimonials();