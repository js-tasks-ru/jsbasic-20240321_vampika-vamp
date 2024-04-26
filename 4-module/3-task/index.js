function highlight(table) {
  // ваш код...
  let ageIndex = 1;
  let genderIndex = 2;
  let statusIndex = 3;
  [...table.rows].map((row) => { if (row.cells[ageIndex].innerHTML < 18) {row.style.textDecoration = 'line-through'; console.log(row.style.textDecoration)}
  if (row.cells[genderIndex].innerHTML == "m") row.classList.add('male'); if (row.cells[genderIndex].innerHTML == "f") row.classList.add('female');
  if (row.cells[statusIndex].dataset.available === "true") row.classList.add("available");
   else if (row.cells[statusIndex].dataset.available === "false") row.classList.add("unavailable");
    else if (typeof row.cells[statusIndex].dataset.available === 'undefined') row.hidden = true; });
}
