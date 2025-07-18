const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get all price elements
  const priceElements = document.querySelectorAll(".price");

  // Calculate sum
  let total = 0;
  priceElements.forEach((el) => {
    total += parseFloat(el.textContent);
  });

  // Create new row and cell
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  // Set total cell to span both columns and show total
  totalCell.setAttribute("colspan", 2);
  totalCell.textContent = `Total: Rs ${total}`;

  newRow.appendChild(totalCell);

  // Append the new row at the end of the table
  document.querySelector("table").appendChild(newRow);
};

// Add event listener
getSumBtn.addEventListener("click", getSum);
