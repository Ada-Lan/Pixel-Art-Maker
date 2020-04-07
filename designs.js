// Select color input
const color = document.getElementById("colorPicker");
// Select size input
const tableHeight = document.getElementById("inputHeight");
const tableWidth = document.getElementById("inputWidth");
const pixelCanvas = document.getElementById("pixelCanvas");
const sizePicker = document.getElementById("sizePicker");

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function(event){
  event.preventDefault()
    var height = document.getElementById("inputHeight").value
    var width = document.getElementById("inputWidth").value
  makeGrid(height, width);
});

//make grid function
function makeGrid(height, width) {
  var table = "";
    for (var row = 0; row < height; ++row) {
      table = table + "<tr>"
        for (var column = 0; column < width; ++column) {
          table = table + "<td class=cell>"
      }
    }
  pixelCanvas.innerHTML = table;
  clickCell()
}
//click event to colour cells
 function clickCell() {
// on color selection return color:
    const cells = document.getElementsByClassName('cell');
      for (var c = 0; c < cells.length; ++c) {
        cells[c].addEventListener("click", function (event) {
            var whenCellIsClicked = event.target;
              whenCellIsClicked.style.backgroundColor = color.value;
        });
    }
}
