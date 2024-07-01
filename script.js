const container = document.querySelector("#container");
container.style.backgroundColor = "red";

//set the contents of whole page to be in the center horizontally
const fullBody = document.querySelector('body');
fullBody.style.display = "flex"
fullBody.style.flexDirection = "column"
fullBody.style.alignItems = "center"

//initialize number of sides
//calculate, total boxes
//calculate width of each box
let nSide = 10;
let totalBoxes = nSide * nSide;
let smallBoxWidth = 600 / nSide;

//set size and flex properties to big box
container.style.width = "600px"
container.style.height = "600px"
container.style.display = "flex";
container.style.flexWrap = "wrap"

//creates one small box
function createOneSmallBox() {
    let innerBox = document.createElement("div");
    innerBox.classList.add("smallBox");

    innerBox.style.border = "solid";
    innerBox.style.borderColor = "Black";
    innerBox.style.borderWidth = 10

    innerBox.style.height = `${smallBoxWidth}px`
    innerBox.style.width = `${smallBoxWidth}px`

    innerBox.style.flex = ""
    innerBox.style.boxSizing = "border-box";

    container.append(innerBox)
}


let c = 0;
for (let x = 1; x <= totalBoxes; x++) {
    c++;
    createOneSmallBox()
}

console.log(`The container is divided into ${nSide} x ${nSide} = ${c} boxes`)
console.log(`The small box has a side length of ${smallBoxWidth}`)