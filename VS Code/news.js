const API_KEY = `3UFL53YIDFZDYJWV`; 

const heute = new Date();
const jahr = heute.getFullYear();
const monat = String(heute.getMonth() + 1).padStart(2, '0');
const tag = String(heute.getDate()).padStart(2, '0');

const formatiertesDatum = `${jahr}-${monat}-${tag}`;
/* console.log(formatiertesDatum); */

async function loadNews() {
    let url = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=' + API_KEY;

    let response = await fetch(url);  //await d.h. warten bis daten abgerufen bzw erhalten
    let responseAsJson = await response.json();

    /* console.log(responseAsJson['Meta Data']);
    console.log(responseAsJson['Time Series (Digital Currency Daily)']);
    console.log(responseAsJson['Time Series (Digital Currency Daily)'][formatiertesDatum]['6. market cap (USD)']);
     */

    /* let marketCap = (responseAsJson[formatiertesDatum]['6. market cap (USD)']);
    document.getElementById('market-cap').innerHTML = `<b> ${marketCap} € </b>`;

    let Volume = (responseAsJson[formatiertesDatum]['5. volume (USD)']);
    document.getElementById('volume').innerHTML = `<b> ${Volume} € </b>`;
 */}