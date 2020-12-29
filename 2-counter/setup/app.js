
const value=document.getElementById("value");
const btns=document.querySelectorAll(".btn");
let count=0;
btns.forEach(btn=>{
    btn.addEventListener("click",function(e){
        const styles=e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
            value.textContent=count;
            value.style.color='red';
        }
        else if(styles.contains("increase")){
            count++;
            value.textContent=count;
            value.style.color='green';
        }
        else if(styles.contains("reset")){
            count=0;
            value.textContent=count;
            value.style.color='gray';
        }
        
    })

})