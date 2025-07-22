
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const body = document.body;


// Smooth scroll to sections
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


// Toggle nav and scroll behavior
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  body.classList.toggle('no-scroll');
});

// Close menu and restore scroll on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    body.classList.remove('no-scroll');
  });
});

// Initialize EmailJS
window.onload = function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // Example: emailjs.init("RiH3z-example");

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(() => {
        document.getElementById("response-msg").textContent = "✅ Message sent successfully!";
        form.reset();
      }, (error) => {
        console.error("EmailJS Error:", error);
        document.getElementById("response-msg").textContent = "❌ Failed to send message.";
      });
  });
};
