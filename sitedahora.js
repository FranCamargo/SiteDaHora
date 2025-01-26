function carregar() {
  let msg = window.document.getElementById("msg");
  let img = window.document.getElementById("imagem");
  let data = new Date();
  let hora = data.getHours();
  let minutos = String(data.getMinutes()).padStart(2, "0"); // Adiciona o zero à esquerda se necessário.
  let dia = String(data.getDate()).padStart(2, "0"); // Corrige o dia caso não mostre o 0.
  let mes = String(data.getMonth() + 1).padStart(2, "0"); // Corrige o mês (mês começa em 0).
  let ano = data.getFullYear();

  const yearElement = document.getElementById('currentYear');
  yearElement.textContent = new Date().getFullYear();

  msg.innerHTML = `Agora são ${hora}:${minutos} hrs. <br>
  Hoje é dia ${dia}/${mes}/${ano}.`;

  if (hora >= 0 && hora < 12) {
    // Bom dia!
    saudacao.innerHTML = `Bom dia!`;
    img.src = "manha.png";
    document.body.style.background = "rgb(145, 160, 147)";
  } else if (hora >= 12 && hora < 18) {
    // Boa tarde!
    saudacao.innerHTML = "Boa tarde!";
    img.src = "tarde.png";
    document.body.style.background = "rgb(184, 141, 96)";
  } else {
    // Boa noite!
    saudacao.innerHTML = "Boa noite!";
    img.src = "noite.png";
    document.body.style.background = "rgb(40, 41, 46)";
  }
}
