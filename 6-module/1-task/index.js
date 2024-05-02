/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  elem = null;
  #list = [];

  constructor(rows) {
    this.#list = rows;
    this.elem = this.#template();
    [...this.elem.querySelectorAll('button')].map((button) => button.addEventListener('click',  this.#removeStroke))
  }
  
  
  #template() {
    let table = document.createElement("table");
    table.innerHTML = ` <thead>
    <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
    </tr>
</thead>
<tbody>
${
  this.#list.map(elem => `<tr><td>${elem.name}</td><td>${elem.age}</td><td>${elem.salary}</td><td>${elem.city}</td><td><button>X</button></td></tr>`).join('')
}
</tbody>`;
    return table;
  }

  #removeStroke() {
    let stroke = event.target.closest('tr'); 
    stroke.parentElement.removeChild(stroke);
  }


}
