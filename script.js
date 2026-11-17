
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// Abrir e fechar menu
menuToggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", aberto);
  menuToggle.setAttribute(
    "aria-label",
    aberto ? "Fechar menu" : "Abrir menu"
  );

  menuToggle.textContent = aberto ? "✕" : "☰";
});

// Fechar menu ao clicar em um link
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.textContent = "☰";
  });
});

// Formulário de contato
const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const nome = document.getElementById("name").value.trim();

  feedback.textContent =
    `Obrigado, ${nome}! Sua mensagem foi validada com sucesso.`;

  feedback.style.color = "#15803d";

  form.reset();
});
