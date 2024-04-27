function makeDiagonalRed(table) {
  // ваш код...
  [...table.rows].map((row, index) => row.cells[index].style.backgroundColor = "red");
}
