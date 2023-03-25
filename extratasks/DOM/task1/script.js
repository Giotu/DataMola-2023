/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
function createCalendar(elem, year, month) {
  const date = new Date(year, month - 1);
  const firstDay = date.getDay() || 7;
  const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  table.append(thead);
  const tr = document.createElement('tr');

  for (const day of days) {
    const th = document.createElement('th');
    th.textContent = day;
    tr.append(th);
  }

  thead.append(tr);

  const tbody = document.createElement('tbody');
  let row = document.createElement('tr');
  tbody.append(row);
  table.append(tbody);

  for (let i = 1; i < firstDay; i++) {
    const td = document.createElement('td');
    row.append(td);
  }

  for (let i = 1; i <= new Date(year, month, 0).getDate(); i++) {
    const cell = document.createElement('td');
    cell.textContent = i;

    if (row.children.length === 7) {
      row = document.createElement('tr');
      tbody.append(row);
    }
    row.append(cell);
  }

  for (let i = row.children.length; i < 7; i++) {
    const td = document.createElement('td');
    row.append(td);
  }

  elem.append(table);
}

createCalendar(document.body.firstElementChild, 2012, 9);
