const container = document.querySelector("#container");
// container.style.backgroundColor = "red";
container.style.border = "solid";
container.style.borderColor = "black";
container.style.borderWidth = "10px";

//set size and flex properties to big box
container.style.width = "600px"
container.style.height = "600px"
container.style.display = "flex";
container.style.flexWrap = "wrap"

//initialize number of sides
let nSide = 16;
let totalBoxes;
let smallBoxWidth;

basicCalculation();
createMatrix(totalBoxes)

//calculate, total boxes
//calculate width of each box
function basicCalculation() {
    totalBoxes = nSide * nSide;
    smallBoxWidth = 600 / nSide;
    return smallBoxWidth;
}

//creates one small box
function createOneSmallBox() {
    basicCalculation();
    let innerBox = document.createElement("div");
    innerBox.classList.add("smallBox");
    innerBox.addEventListener("mouseover", function () {
        hoverChange(innerBox)
    })

    // innerBox.style.border = "solid";
    // innerBox.style.borderColor = "Black";
    // innerBox.style.borderWidth = 1

    innerBox.style.height = `${smallBoxWidth}px`
    innerBox.style.width = `${smallBoxWidth}px`

    innerBox.style.flex = ""
    innerBox.style.boxSizing = "border-box";

    container.append(innerBox)
}

//creates required number of small boxes
//counts
function createMatrix(totalBoxes) {

    container.innerHTML = "";
    for (let x = 1; x <= totalBoxes; x++) {
        createOneSmallBox()
    }

    //gives out some stuff in the console
    console.log(`The container is divided into ${nSide} x ${nSide}} boxes`)
    console.log(`The small box has a side length of ${smallBoxWidth}`)
}

//query selector to address resize buttons
const resizeButton = document.querySelector("#resize");
resizeButton.addEventListener("click", resize)

//event handler for resize button click
function resize() {
    nSide = prompt("you clicked the resize button")
    totalBoxes = nSide * nSide;
    createMatrix(totalBoxes);
}

// responsible to change color of small box when cursor hovers over it
function hoverChange(innerBox) {
    innerBox.style.backgroundColor = "black"
}
