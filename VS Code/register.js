function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthdate = document.getElementById('birthdate').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (firstName && lastName && birthdate && username && email && password) {
        // Daten im LocalStorage speichern
        const userData = {
            firstName,
            lastName,
            birthdate,
            username,
            email,
            password
        };

        localStorage.setItem('userData', JSON.stringify(userData)); // Daten im LocalStorage speichern

        // Hier Daten speichern oder verarbeiten
        console.log('Daten wurden gespeichert:');
        console.log('Vorname:', firstName);
        console.log('Nachname:', lastName);
        console.log('Geburtsdatum:', birthdate);
        console.log('Benutzername:', username);
        console.log('E-Mail-Adresse:', email);
        console.log('Passwort:', password);

        // Kleines Popup (zum Beispiel ein Alert)
        alert('Daten wurden erfolgreich gespeichert!');
    } else {
        alert('Bitte füllen Sie alle Felder aus.'); // Benachrichtigung, wenn nicht alle Felder ausgefüllt sind
    }
}

function submitForm() {
    // Nach erfolgreicher Überprüfung weiterleiten
    window.location.href = 'login.html';
}