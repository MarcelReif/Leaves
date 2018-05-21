let ctx1 = document.getElementById('network_chart').getContext("2d");

const network_chart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ["Aktuell", "4 Stunden", "8 Stunden", "12 Stunden", "16 Stunden", "20 Stunden", "24 Stunden"],
        datasets: [
            {
                label: "Upload in GB",
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
                backgroundColor: "#C8E1FD",
                borderWidth: 2,
                data: [12, 82, 24, 67, 16, 72, 14]
            },
            {
                label: "Download in GB",
                borderColor: "#FF8282",
                pointBorderColor: "#FF8282",
                pointBackgroundColor: "#FFFFFF",
                pointHoverBackgroundColor: "#FFFFFF",
                pointHoverBorderColor: "#FF8282",
                pointBorderWidth: 2,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                fill: true,
                backgroundColor: "#F4D6E3",
                borderWidth: 2,
                data: [25, 65, 75, 12, 96, 55, 13]
            }
        ]
    },
    options: {
        legend: {

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

let ctx2 = document.getElementById('disk_chart').getContext("2d");

const disk_chart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ["Aktuell", "4 Stunden", "8 Stunden", "12 Stunden", "16 Stunden", "20 Stunden", "24 Stunden"],
        datasets: [
            {
                label: "Schreiben in MB/s",
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
                backgroundColor: "#C8E1FD",
                borderWidth: 2,
                data: [12, 14, 28, 13, 22, 33, 11]
            },
            {
                label: "Lesen in MB/s",
                borderColor: "#FF8282",
                pointBorderColor: "#FF8282",
                pointBackgroundColor: "#FFFFFF",
                pointHoverBackgroundColor: "#FFFFFF",
                pointHoverBorderColor: "#FF8282",
                pointBorderWidth: 2,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                fill: true,
                backgroundColor: "#F4D6E3",
                borderWidth: 2,
                data: [25, 11, 55, 8, 1, 15, 18]
            }
        ]
    },
    options: {
        legend: {

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

let ctx3 = document.getElementById('iops_chart').getContext("2d");

const iops_chart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ["Aktuell", "4 Stunden", "8 Stunden", "12 Stunden", "16 Stunden", "20 Stunden", "24 Stunden"],
        datasets: [
            {
                label: "Schreiben",
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
                backgroundColor: "#C8E1FD",
                borderWidth: 2,
                data: [10443, 11023, 11121, 10023, 11501, 11532, 11742]
            },
            {
                label: "Lesen",
                borderColor: "#FF8282",
                pointBorderColor: "#FF8282",
                pointBackgroundColor: "#FFFFFF",
                pointHoverBackgroundColor: "#FFFFFF",
                pointHoverBorderColor: "#FF8282",
                pointBorderWidth: 2,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                fill: true,
                backgroundColor: "#F4D6E3",
                borderWidth: 2,
                data: [9219, 10012, 9831, 9837, 8982, 9131, 9134]
            }
        ]
    },
    options: {
        legend: {

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

let ctx4 = document.getElementById('overall_statistics').getContext("2d");

const overall_statistics = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ["Aktuell", "4 Stunden", "8 Stunden", "12 Stunden", "16 Stunden", "20 Stunden", "24 Stunden"],
        datasets: [
            {
                label: "CPU",
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
                backgroundColor: "#C8E1FD",
                borderWidth: 2,
                data: [12, 14, 18, 5, 22, 15, 18]
            },
            {
                label: "RAM",
                borderColor: "#FF8282",
                pointBorderColor: "#FF8282",
                pointBackgroundColor: "#FFFFFF",
                pointHoverBackgroundColor: "#FFFFFF",
                pointHoverBorderColor: "#FF8282",
                pointBorderWidth: 2,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                fill: true,
                backgroundColor: "#F4D6E3",
                borderWidth: 2,
                data: [80, 72, 56, 73, 66, 79, 83]
            },
            {
                label: "HDD / SSD",
                borderColor: "#FFC58B",
                pointBorderColor: "#FFC58B",
                pointBackgroundColor: "#FFFFFF",
                pointHoverBackgroundColor: "#FFFFFF",
                pointHoverBorderColor: "#FFC58B",
                pointBorderWidth: 2,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                fill: true,
                backgroundColor: "#FFDEBE",
                borderWidth: 2,
                data: [34, 22, 21, 48, 51, 57, 53]
            },
            {
                label: "Netzwerk",
                borderColor: "#7BED9F",
                pointBorderColor: "#7BED9F",
                pointBackgroundColor: "#FFFFFF",
                pointHoverBackgroundColor: "#FFFFFF",
                pointHoverBorderColor: "#7BED9F",
                pointBorderWidth: 2,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                fill: true,
                backgroundColor: "#B7FCCD",
                borderWidth: 2,
                data: [11, 87, 56, 50, 45, 11, 45]
            }
        ]
    },
    options: {
        legend: {

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