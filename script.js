let string = "";
let history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
let buttons = document.querySelectorAll('.button');
let historyButton = document.querySelector('.history-button');
let unitConversionButton = document.querySelector('.unit-conversion-button');
let modal = document.getElementById('unitConversionModal');
let closeModalButton = document.getElementsByClassName('close')[0];

// Event listeners for buttons
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    // Calculation logic
    if (e.target.innerHTML === '=') {
      try {
        let result = eval(string.replace('x', '*').replace('÷', '/'));
        let historyEntry = `${string} = ${result}`;
        history.push(historyEntry);
        localStorage.setItem('calculatorHistory', JSON.stringify(history));
        string = result.toString();
      } catch {
        string = "Error";
      }
      document.querySelector('.input').value = string;
    } else if (e.target.innerHTML === 'C') {
      string = "";
      document.querySelector('.input').value = string;
    } else if (e.target.innerHTML === '±') {
      string = string.charAt(0) === '-' ? string.slice(1) : '-' + string;
      document.querySelector('.input').value = string;
    } else if (e.target.innerHTML === 'History') {
      window.location.href = 'history.html';
    } else if (e.target.innerHTML === 'Unit Conversion') {
      openModal();
    } else {
      string = string + e.target.innerHTML;
      document.querySelector('.input').value = string;
    }
  });
});

// Function to open the unit conversion modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the unit conversion modal
closeModalButton.onclick = function() {
  modal.style.display = 'none';
}

// Close the modal if user clicks outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

//
