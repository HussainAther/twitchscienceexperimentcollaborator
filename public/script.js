document.addEventListener('DOMContentLoaded', () => {
  const predictButton = document.getElementById('predict-button');
  const resultDisplay = document.getElementById('result');

  // Set up Chart.js for live data visualization
  const ctx = document.getElementById('dataChart').getContext('2d');
  const dataChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [], // Will be populated with timestamps
      datasets: [{
        label: 'Experiment Data',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      }],
    },
    options: {
      responsive: true,
      scales: {
        x: { display: true, title: { display: true, text: 'Time' } },
        y: { beginAtZero: true, title: { display: true, text: 'Data Value' } },
      },
    },
  });

  // Function to update the chart with new data
  const updateChart = (newData) => {
    const currentTime = new Date().toLocaleTimeString();
    dataChart.data.labels.push(currentTime);
    dataChart.data.datasets[0].data.push(newData);
    dataChart.update();
  };

  // Simulate real-time data updates
  setInterval(() => {
    const simulatedData = Math.random() * 100; // Random data for visualization
    updateChart(simulatedData);
  }, 3000);

  // Event listener for prediction submission
  predictButton.addEventListener('click', () => {
    fetch('/api/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prediction: Math.random() * 100 }), // Replace with actual prediction data
    })
    .then(response => response.json())
    .then(data => {
      resultDisplay.textContent = `Prediction Recorded: ${data.status}`;
    })
    .catch(error => console.error('Error:', error));
  });
});

