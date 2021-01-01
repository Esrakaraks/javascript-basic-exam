const btns=document.querySelectorAll(".tab-btn");
const about=document.querySelector(".about");
const articles=document.querySelectorAll(".content");

about.addEventListener("click",function(e){
    console.log("e.target",e.target);
    const id=e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });

        articles.forEach(function(artcile){
            artcile.classList.remove("active");
        });

        const dataset=document.getElementById(id);
        dataset.classList.add("active");
    }
    
});