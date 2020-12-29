const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
    document.body.style.backgroundColor = hexCreate();

})


function hexCreate() {
    let hexcolor = "#"
    for (let i = 0; i < 6; i++) {
        const random = randomNumber();
        hexcolor += hex[random];
    }
    console.log("hexcolor", hexcolor);
    return hexcolor;
}
function randomNumber() {
    return Math.floor(Math.random() * hex.length);
}
