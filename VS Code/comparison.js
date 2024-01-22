const API_KEY = `7UKXZI0V7PUY0DXW`;

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