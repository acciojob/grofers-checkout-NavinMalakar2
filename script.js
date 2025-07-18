function calculateTotal() {
  const priceElements = document.querySelectorAll('.price');
  let total = 0;

  priceElements.forEach(el => {
    total += Number(el.textContent);
  });

  // Remove previous total row if exists
  const oldAns = document.getElementById('ans');
  if (oldAns) oldAns.parentElement.remove();

  // Create new row and cell
  const newRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.setAttribute('colspan', '2');
  totalCell.setAttribute('id', 'ans');
  totalCell.textContent = total;

  newRow.appendChild(totalCell);
  const table = document.querySelector('table');
  table.appendChild(newRow);
}
