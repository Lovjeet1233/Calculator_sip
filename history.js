let history = JSON.parse(localStorage.getItem('calculationHistory')) || [];

function displayHistory() {
  const historyList = document.getElementById('historyList');
  historyList.innerHTML = '';
  history.forEach(entry => {
    const li = document.createElement('li');
    li.innerText = entry;
    historyList.appendChild(li);
  });
}

function addToHistory(entry) {
  history.push(entry);
  localStorage.setItem('calculationHistory', JSON.stringify(history));
  displayHistory();
}

function clearHistory() {
  history = [];
  localStorage.setItem('calculationHistory', JSON.stringify(history));
  displayHistory();
}

function goBack() {
  window.history.back();
}

document.addEventListener('DOMContentLoaded', displayHistory);
