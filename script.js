const ctxSales = document.getElementById('salesChart').getContext('2d');
new Chart(ctxSales, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(115, 128, 236, 0.5)',
      borderColor: '#7380ec',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});
const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
new Chart(ctxRevenue, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Revenue',
      data: [14, 18, 7, 8, 5, 6],
      backgroundColor: 'rgba(65, 241, 182, 0.3)',
      borderColor: '#41f1b6',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});


document.getElementById('updateButton').addEventListener('click', function() {
  const newRevenue = document.getElementById('revenueInput').value;
  document.getElementById('currentRevenue').innerText = `$${newRevenue}`;
});


// Modal script
const modal = document.getElementById("myModal");
const btn = document.getElementById("infoButton");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  
  if (!username || !email) {
    document.getElementById('error-message').innerText = 'Please fill in all fields.';
  } else {
    document.getElementById('error-message').innerText = '';
    // Proceed with form submission or further actions
    alert('Form submitted successfully!');
  }
});


document.getElementById('fadeButton').addEventListener('click', function() {
  const fadeElement = document.getElementById('fadeElement');
  fadeElement.classList.toggle('show');
});
