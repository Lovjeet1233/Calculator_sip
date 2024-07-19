function calculateSIP() {
    const monthlyInvestment = parseFloat(document.getElementById('monthly-investment').value);
    const returnRate = parseFloat(document.getElementById('return-rate').value) / 100 / 12;
    const investmentDuration = parseFloat(document.getElementById('investment-duration').value) * 12;
  
    if (isNaN(monthlyInvestment) || isNaN(returnRate) || isNaN(investmentDuration)) {
      alert("Please enter valid inputs");
      return;
    }
  
    let totalAmount = 0;
    for (let i = 0; i < investmentDuration; i++) {
      totalAmount = (totalAmount + monthlyInvestment) * (1 + returnRate);
    }
  
    const totalInvested = monthlyInvestment * investmentDuration;
    const totalReturns = totalAmount - totalInvested;
  
    document.getElementById('total-invested-amount').innerText = `Total Invested Amount: ₹${totalInvested.toFixed(2)}`;
    document.getElementById('total-returns').innerText = `Total Returns: ₹${totalReturns.toFixed(2)}`;
    document.getElementById('total-amount').innerText = `Total Amount: ₹${totalAmount.toFixed(2)}`;
  
    const ctx = document.getElementById('sipChart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Invested Amount', 'Returns'],
        datasets: [{
          data: [totalInvested, totalReturns],
          backgroundColor: ['#36A2EB', '#FF6384'],
          hoverBackgroundColor: ['#36A2EB', '#FF6384']
        }]
      }
    });
  }
