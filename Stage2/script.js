// Time update for profile page
const timeElement = document.getElementById("current-time");
if (timeElement) {
  function updateTime() {
    timeElement.textContent = Date.now();
  }
  updateTime();
  setInterval(updateTime, 1000);
}

// Contact form validation
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name");
    const email = document.getElementById("contact-email");
    const subject = document.getElementById("contact-subject");
    const message = document.getElementById("contact-message");
    const successMsg = document.getElementById("success-message");

    let valid = true;

    function showError(field, message) {
      const errorElement = document.getElementById(
        `error-${field.id.split("-")[1]}`
      );
      errorElement.textContent = message;
      valid = false;
    }

    // Clear all errors
    document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

    if (!name.value.trim()) showError(name, "Full name is required.");
    if (!email.value.trim()) showError(email, "Email is required.");
    else if (!/\S+@\S+\.\S+/.test(email.value))
      showError(email, "Enter a valid email.");
    if (!subject.value.trim()) showError(subject, "Subject is required.");
    if (!message.value.trim()) showError(message, "Message is required.");
    else if (message.value.length < 10)
      showError(message, "Message must be at least 10 characters.");

    if (valid) {
      successMsg.hidden = false;
      contactForm.reset();
    } else {
      successMsg.hidden = true;
    }
  });
}
