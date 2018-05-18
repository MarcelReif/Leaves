let ctx = document.getElementById('performance_chart').getContext("2d");
const gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
gradientFill.addColorStop(1, "rgba(200, 236, 253, 1)");
gradientFill.addColorStop(0, "rgba(200, 225, 253, 1)");

const performance_chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Aktuell", "Vor 4 Stunden", "Vor 8 Stunden", "Vor 12 Stunden", "Vor 16 Stunden", "Vor 20 Stunden", "Vor 24 Stunden"],
        datasets: [{
            label: "Auslastung in %",
            borderColor: "#0074FF",
            pointBorderColor: "#0074FF",
            pointBackgroundColor: "#FFFFFF",
            pointHoverBackgroundColor: "#FFFFFF",
            pointHoverBorderColor: "#0074FF",
            pointBorderWidth: 2,
            pointHoverRadius: 6,
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [12, 82, 24, 67, 16, 72, 14]
        }]
    },
    options: {
        legend: {
            display: false
        },
        animation: {

        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(58, 58, 58, 0.3)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }

            }],
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(58, 58, 58, 0.3)",
                    fontStyle: "bold"
                }
            }]
        }
    }
});