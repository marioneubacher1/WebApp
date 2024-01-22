document.addEventListener("DOMContentLoaded", function () {
    // Lade die Navbar von navbar.html und füge sie in das <body> ein
    fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
        document.body.insertAdjacentHTML("afterbegin", data);
      });
  });  