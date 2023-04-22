const message = "Merci pour votre message. Nous vous répondons au plus vite.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
