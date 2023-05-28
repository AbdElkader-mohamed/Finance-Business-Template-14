export function countDown(target) {
  let flag = false
  window.addEventListener("scroll", function(){
    if (window.scrollY >= target.offsetTop - 200) {
      if (!flag) {
        document.querySelectorAll(".digit").forEach(digit => {
          let count = setInterval(_=>{
            digit.textContent = Math.ceil(+digit.textContent + (digit.dataset.goal / 200)) ;
            if (+digit.textContent >= digit.dataset.goal) clearInterval(count)
          },2000 / digit.dataset.goal)
        })
      }
    flag = true ;
    }
  })
}
