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
//const gridElement = document.createElement("div");
let size; //= 16;
function makeRows(rows, cols) {
  size = prompt("Board Size: ");
  while (container.lastChild){  //delete child elements if they exist so as to clear the grid;
    container.removeChild(container.lastChild);
  };
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);
  if (size > 16){
    for (c = 0; c < (size * size); c++) {
      let cell = document.createElement("div");
      cell.innerText = (c + 1);
      cell.id = (c+1);
      cell.addEventListener("mouseover",changeColor);
      container.appendChild(cell).className = "grid-item-large";      
    };
  }
  else{
  for (c = 0; c < (size * size); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    cell.id = (c+1);
    cell.addEventListener("mouseover",changeColor);
    container.appendChild(cell).className = "grid-item";      
  };
}
};
  
function clearBoard(e){
  //window.location.reload();
  //const board = document.getElementsByClassName("grid-item");
  //board.style.backgroundColor = "white";
  while (container.lastChild){
    container.removeChild(container.lastChild);
  };
  if (size > 16){
    for (c = 0; c < (size * size); c++) {
      let cell = document.createElement("div");
      cell.innerText = (c + 1);
      cell.id = (c+1);
      cell.addEventListener("mouseover",changeColor);
      container.appendChild(cell).className = "grid-item-large";      
    };
  }
  else{
  for (c = 0; c < (size * size); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    cell.id = (c+1);
    cell.addEventListener("mouseover",changeColor);
    container.appendChild(cell).className = "grid-item";      
  };
}
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

//makeRows(16, 16);
//setTimeout(function(){makeRows(size,size);},2000);

function getID(){
    let e = document.getElementById(this).setAttribute('background-color','black');
};
