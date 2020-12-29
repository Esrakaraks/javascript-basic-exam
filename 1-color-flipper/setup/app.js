const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById('btn');
const color=document.querySelector('.color');

btn.addEventListener("click",function(){
    const randomNumber=rastgeleRandom();
    console.log("color",color);
    color.textContent=colors[randomNumber]
    document.body.style.backgroundColor=colors[randomNumber];

})

function rastgeleRandom(){
   return Math.floor(Math.random()*5);

}