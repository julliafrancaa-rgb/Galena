
document.addEventListener("DOMContentLoaded", () => {
  // Atualiza automaticamente o ano do rodapé.
  const ano = document.getElementById("ano");

  if (ano) {
    ano.textContent = new Date().getFullYear();
  }

  // Fecha o menu do navegador ao clicar
  // em um link interno da página.
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  linksInternos.forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.querySelector(".navlinks");

      if (menu) {
        menu.dataset.open = "0";
      }
    });
  });
});
