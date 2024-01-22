function submitForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Benutzerdaten aus dem LocalStorage abrufen
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && storedUserData.username === username) {
        // Überprüfen, ob das eingegebene Passwort mit dem gespeicherten Passwort übereinstimmt (in der Praxis sollte das Passwort sicher gehasht sein)
        if (storedUserData.password === password) {
            // Hier könnten Sie die Anmeldung erfolgreich gestalten, z.B. eine Weiterleitung oder Anzeige eines Erfolgs-Icons
            alert('Anmeldung erfolgreich!');
        } else {
            alert('Falsches Passwort. Bitte erneut versuchen.');
        }
    } else {
        alert('Benutzer nicht gefunden. Bitte registrieren Sie sich zuerst.');
    }
}

function submitForm() {
    window.location.href = 'illustration.html';
}