
/* ==========================================
   GALENA MEDICINA INTEGRADA
   INTERAÇÕES DO SITE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ========================================
     MENU MOBILE
  ======================================== */

  const menuBotao = document.getElementById("menuBotao");
  const menu = document.getElementById("menu");

  if (menuBotao && menu) {

    function fecharMenu() {
      menu.classList.remove("ativo");

      menuBotao.setAttribute(
        "aria-expanded",
        "false"
      );

      menuBotao.setAttribute(
        "aria-label",
        "Abrir menu"
      );
    }

    function abrirMenu() {
      menu.classList.add("ativo");

      menuBotao.setAttribute(
        "aria-expanded",
        "true"
      );

      menuBotao.setAttribute(
        "aria-label",
        "Fechar menu"
      );
    }

    menuBotao.addEventListener("click", () => {

      const estaAberto =
        menu.classList.contains("ativo");

      if (estaAberto) {
        fecharMenu();
      } else {
        abrirMenu();
      }

    });

    /* FECHAR AO CLICAR EM UMA SEÇÃO */

    const linksMenu = menu.querySelectorAll("a");

    linksMenu.forEach((link) => {
      link.addEventListener("click", () => {
        fecharMenu();
      });
    });

    /* FECHAR AO CLICAR FORA */

    document.addEventListener("click", (evento) => {

      const clicouNoMenu =
        menu.contains(evento.target);

      const clicouNoBotao =
        menuBotao.contains(evento.target);

      if (!clicouNoMenu && !clicouNoBotao) {
        fecharMenu();
      }

    });

    /* FECHAR COM ESC */

    document.addEventListener("keydown", (evento) => {

      if (evento.key === "Escape") {
        fecharMenu();
      }

    });

    /* REAJUSTAR AO VOLTAR PARA DESKTOP */

    window.addEventListener("resize", () => {

      if (window.innerWidth > 800) {
        fecharMenu();
      }

    });

  }

  /* ========================================
     ANO AUTOMÁTICO NO RODAPÉ
  ======================================== */

  const anoAtual = document.getElementById("anoAtual");

  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }

});
