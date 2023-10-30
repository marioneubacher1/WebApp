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
                    beginAtZero: true
                }
            }
        }
    });
}