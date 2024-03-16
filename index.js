document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("messageError");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    if (name.trim() === "") {
      nameError.textContent = "Name is required";
    }

    if (email.trim() === "") {
      emailError.textContent = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.textContent = "Invalid email format";
    }

    if (message.trim() === "") {
      messageError.textContent = "Message is required";
    }

    if (nameError.textContent !== "" || emailError.textContent !== "" || messageError.textContent !== "") {
      return false;
    }
    this.submit();
});

