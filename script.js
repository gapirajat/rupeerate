document.addEventListener('DOMContentLoaded', function() {
    fetchExchangeRates();
});

function fetchExchangeRates() {
    const apiUrl = 'https://v6.exchangerate-api.com/v6/f7b0e15409677e70e45d07c8/latest/INR'; // Replace with your API URL
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayExchangeRates(data.rates);
        })
        .catch(error => console.error('Error:', error));
}

function displayExchangeRates(rates) {
    const ratesDiv = document.getElementById('exchangeRates');
    ratesDiv.innerHTML = '<h2>Current Rates:</h2>';
    Object.keys(rates).forEach(currency => {
        ratesDiv.innerHTML += `<p>1 INR = ${rates[currency]} ${currency}</p>`;
    });
}

// ... (Previous code)

document.addEventListener('DOMContentLoaded', function() {
    fetchExchangeRates();
    fetchHistoricalData();
});

// New function to fetch historical data
function fetchHistoricalData() {
    const historicalApiUrl = 'f7b0e15409677e70e45d07c8'; // Replace with your API URL
    fetch(historicalApiUrl)
        .then(response => response.json())
        .then(data => {
            displayHistoricalChart(data);
        })
        .catch(error => console.error('Error:', error));
}

// Function to display the historical chart
function displayHistoricalChart(data) {
    const ctx = document.getElementById('historicalChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Object.keys(data.rates), // X-axis labels (dates)
            datasets: [{
                label: 'INR Exchange Rate',
                data: Object.values(data.rates), // Y-axis data
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}
