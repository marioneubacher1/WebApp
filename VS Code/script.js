let users = [
    { 'email': 'marioneubacher@protonmail.com', 'password': 'test123' }
];

function addUser() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    users.push({ email: email, password: password });
    // Weiterleitung zur Login-Seite + Nachricht anzeigen: "Erfolgreiche Registrierung"
    window.location.href = 'login.html?msg=You have registered successfully';
}
