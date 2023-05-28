import {} from './only-page.js' // to render slider landing && tistimonials carousel && banner carousel
import {getData} from './upData.js';
import {setDigitCount ,setFan} from './data.js'
import {countDown} from './scrolling-countDown.js'

// render from upData.js // up data to services cards
let url = `https://abdelkader-mohamed.github.io/my-data-/finance-business/finance-business.json`;
let target = document.querySelector("#services-data .parent")
getData(url,target);

// get data counter  // render from data.js
async function dataAbout() {
  let data = await fetch(`https://abdelkader-mohamed.github.io/my-data-/finance-business/finance-business.json`)
  data = await data.json()
  setDigitCount(data.data[0][0])
  setFan(data.data[0][1][0],document.getElementById("fan-facts"))
  setFan(data.data[0][1][1],document.getElementById("more-info"))
}
dataAbout();

//handel counter down  //render from scrolling-countDown.js
let section = document.querySelector(".count-down");
countDown(section);

