
document.addEventListener("DOMContentLoaded", () => {
  // Menu responsivo
  const botaoMenu = document.getElementById("menuBotao");
  const menu = document.getElementById("menu");

  if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", () => {
      const aberto = menu.classList.toggle("ativo");

      botaoMenu.setAttribute("aria-expanded", String(aberto));
      botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
      );
    });

    // Fecha o menu ao selecionar uma seção
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("ativo");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
      });
    });

    // Fecha o menu com a tecla Escape
    document.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape") {
        menu.classList.remove("ativo");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
      }
    });

    // Ajusta o menu quando a tela aumenta
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        menu.classList.remove("ativo");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
      }
    });
  }

  // Ano automático no rodapé
  const anoAtual = document.getElementById("anoAtual");

  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }
});
