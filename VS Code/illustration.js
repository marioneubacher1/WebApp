const API_KEY = `7UKXZI0V7PUY0DXW`;

/* let month = ['2021-07-31', '2021-08-31', '2021-09-30', '2021-10-31', '2021-11-30', '2021-12-31', '2022-01-31', '2022-02-28', '2022-03-31', '2022-04-30', '2022-05-31', '2022-06-30', '2022-07-31', '2022-08-31', '2022-09-30',
'2022-10-31', '2022-11-30', '2022-12-31', '2023-01-31', '2023-02-28', '2023-03-31', '2023-04-30', '2023-05-31', '2023-06-30',
'2023-07-31', '2023-08-31', '2023-09-30', '2023-10-31', '2023-11-30', '2023-12-31', '2024-01-31'
] */

let course = [];

async function init() {
    await loadCourse();
    await loadMonthlyCourse();
    renderChart();
}

function generateMonths(startDate, numberOfMonths) {
    const months = [];

    for (let i = 0; i < numberOfMonths; i++) {
        const currentDate = new Date(startDate);
        currentDate.setMonth(startDate.getMonth() - i); // Änderung: Anpassung der Monate für die letzten 12 Monate

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const lastDay = new Date(year, currentDate.getMonth() + 1, 0).getDate();
        const formattedDate = `${year}-${month}-${lastDay}`;

        months.unshift(formattedDate); // Änderung: Hinzufügen der Daten am Anfang des Arrays für die richtige Reihenfolge
    }

    return months;
}

// Aktuelles Datum als Startpunkt
let currentDate = new Date();

// Generiere Datumsangaben für die letzten 12 Monate ab dem aktuellen Datum
let month = generateMonths(currentDate, 12);

async function loadCourse() {
    let url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=' + API_KEY;

    let response = await fetch(url);  //await d.h. warten bis daten erhalten
    let responseAsJson = await response.json();

    if (responseAsJson && responseAsJson['Realtime Currency Exchange Rate'] && responseAsJson['Realtime Currency Exchange Rate']['5. Exchange Rate']) {
        console.log(Math.round(responseAsJson['Realtime Currency Exchange Rate']['5. Exchange Rate']));
        let currentCourse = (Math.round(responseAsJson['Realtime Currency Exchange Rate']['5. Exchange Rate'])); //browser -> untersuchen -> tab "sources" -> console -> eingeben "loadCourse()"
        document.getElementById('course').innerHTML = `<b> ${currentCourse} € </b>`;
    }
}

async function loadMonthlyCourse() {
    let url = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=USD&apikey=' + API_KEY;
    let response = await fetch(url);
    let responseAsJson = await response.json();

    let monthlyCourse = responseAsJson['Time Series (Digital Currency Monthly)'];
    console.log(responseAsJson['Time Series (Digital Currency Monthly)']);

    for (let i = 0; i < month.length; i++) {
        if (monthlyCourse && monthlyCourse[month[i]] && monthlyCourse[month[i]]['1a. open (USD)']) {
            const courseEachMonth = Math.round(monthlyCourse[month[i]]['1a. open (USD)']);
            course.push(courseEachMonth);
        }
    }
}