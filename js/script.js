// Function to add an item to the receipt
function addItem() {
    // Get the input values
    var itemName = document.getElementById('itemName').value;
    var itemCost = parseFloat(document.getElementById('itemCost').value);
    var salesTax = parseFloat(document.getElementById('salesTax').value) / 100;

    // Validate input
    if (!isFloat(itemCost)) {
        alert('Please enter a valid item cost.');
        return; // Stop further execution
    }

    if (!isFloat(salesTax)) {
        alert('Please enter a valid sales tax.');
        return; // Stop further execution
    }

    // Calculate the sales tax
    var tempTax = itemCost * salesTax;
    // Calculate the final cost
    var finalCost = itemCost + tempTax;

    // Create a new div for the added item
    var newItem = document.createElement('div');
    newItem.classList.add('item');
    // Set the left-aligned text for the item name
    newItem.innerHTML = '<span class="item-name">' + itemName + '</span>';
    // Set the right-aligned text for the final cost
    newItem.innerHTML += '<span class="final-cost">' + finalCost.toFixed(2) + '</span>';

    // Append the new item to the addedItems container
    document.getElementById('addedItems').appendChild(newItem);
}

// Function to check if a value is a float
function isFloat(value) {
    return /^-?\d*(\.\d+)?$/.test(value);
}

// Function to set the current date
window.onload = function() {
    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('currentDate').textContent = formattedDate;
};
