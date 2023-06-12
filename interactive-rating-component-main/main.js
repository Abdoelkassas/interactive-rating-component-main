let i= 0;
let ratingContChilds = document.querySelectorAll(".ratingContainer .circle");
let rating = document.querySelector("main");
let thxCont = document.querySelector(".thxContainer");
let submitBtn = document.querySelector(".submitBtn");
let ratingResult = document.querySelector("#rating")
let value;

ratingContChilds.forEach((ele) => {
  ele.addEventListener("click",(e) =>{
    ratingContChilds.forEach((ele) =>{
      ele.classList.remove("active")
    })
    
    e.currentTarget.classList.add("active")
    value = e.currentTarget.innerText;
    
  })
  
})


submitBtn.onclick = function(){
  
  if(value == undefined){
  event.preventDefault()
  
}else{
  rating.classList.toggle("unvisible")
  thxCont.classList.toggle("visible");
  ratingResult.innerHTML = value;
}
  
}


















