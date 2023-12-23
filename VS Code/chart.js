function renderChart() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: month, //month = array v illustration.js
            datasets: [{
                label: 'Bitcoin Course in USD',
                data: course, //course = #
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'black' // Change this color to your preferred color
                    }
                },
                x: {
                    ticks: {
                        color: 'black' // Change this color to your preferred color
                    }
                }
            }
        }
    });
}