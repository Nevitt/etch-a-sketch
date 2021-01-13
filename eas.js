/*  Etch - A - Sketch 
    16x16 grid of square Div's (best practice to put them in another container that can be placed directly in the HTML)
    Suggestions for making div's appear as a grid are:
        Float/Clear
        Inline-block
        Flexbox
        CSS Grid
    Assignment warns of borders and margins affecting the size of the squares
    
    -After completing above take a Break-


*/

const container = document.getElementById('container');

let size;
let xPad, yPad;



function makeRows(rows, cols) {
 
  size = prompt("Board Size: ");
  size = parseInt(size);
 
  xPad = (755-(size+size+1))/(size*2);
  yPad = (755-(size+size+1))/(size*2);

  xPad = Math.round(xPad);
  yPad = Math.round(yPad);

  while (container.lastChild){  //delete child elements if they exist so as to clear the grid;
    container.removeChild(container.lastChild);
  };
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);

  
  for (c = 0; c < (size * size); c++) {
    let cell = document.createElement("div");

    cell.id = (c+1);
    cell.addEventListener("mouseover",changeColor);
    cell.style.paddingTop = yPad+"px";
    cell.style.paddingBottom = yPad+"px";
    cell.style.paddingLeft = xPad+"px";
    cell.style.paddingRight = xPad+"px";
    cell.style.minHeight = .1 + "px";
    cell.style.minWidth = .1 + "px";
  
    container.appendChild(cell).className = "grid-item";      
  };
};
  
function clearBoard(e){
  
  xTotal = (755-(size+size+1))/(size*2);
  yTotal = (755-(size+size+1))/(size*2);
  xPad = xTotal;
  yPad = yTotal;
  xPad = Math.round(xPad);
  yPad = Math.round(yPad);

  while (container.lastChild){  //delete child elements if they exist so as to clear the grid;
    container.removeChild(container.lastChild);
  };
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);

  
  for (c = 0; c < (size * size); c++) {   //find total number of grid items and create the correct amount of <div>'s in css grid format
    let cell = document.createElement("div");

    cell.id = (c+1);
    cell.addEventListener("mouseover",changeColor);
    cell.style.paddingTop = yPad+"px";
    cell.style.paddingBottom = yPad+"px";
    cell.style.paddingLeft = xPad+"px";
    cell.style.paddingRight = xPad+"px";
    cell.style.minHeight = .1 + "px";
    cell.style.minWidth = .1 + "px";

    container.appendChild(cell).className = "grid-item";  
      
  };
}

function changeColor(e){
  e.target.style.backgroundColor = 'black';
}

const h3Content = document.getElementById('title');
h3Content.textContent = 'Etch-A-Skech';

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener("click", clearBoard);

const sizeBtn = document.getElementById('boardSize');
sizeBtn.addEventListener("click", makeRows);

function getID(){
    let e = document.getElementById(this).setAttribute('background-color','black');
};
