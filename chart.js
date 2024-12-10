let cryptoChartInstance; // Declare a variable to hold the chart instance

export function displayChart(dates, prices, currency) {
    const ctx = document.getElementById('cryptoChart').getContext('2d');

    // Destroy the existing chart instance if it exists
    if (cryptoChartInstance) {
        cryptoChartInstance.destroy();
    }

    cryptoChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: `Price in ${currency.toUpperCase()}`,
                data: prices,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
                fill: false, // Ensure the area under the line is not filled
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day',
                        tooltipFormat: 'MMM dd, yyyy HH:mm', // Use `dd` instead of `DD`
                        displayFormats: {
                            day: 'MMM dd',
                            hour: 'HH:mm'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Date and Time'
                    }
                },
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: `Price in ${currency.toUpperCase()}`
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label || '';
                            const value = context.raw || '';
                            return `${label}: ${currency.toUpperCase()} ${value.toFixed(2)}`;
                        }
                    }
                }
            }
        }
    });
}
