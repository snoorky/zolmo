const actCondominio = document.getElementById("actCondominio");
const actEmpreendimento = document.getElementById("actEmpreendimento");
const containerCondominios = document.querySelector(".containerCondominios");
const containerEmpreendimentos = document.querySelector(".containerEmpreendimentos");

actCondominio.addEventListener("change", function() {
  if (this.checked) {
    containerCondominios.style.display = "flex";
    containerEmpreendimentos.style.display = "none";
  }
});

actEmpreendimento.addEventListener("change", function() {
  if (this.checked) {
    containerCondominios.style.display = "none";
    containerEmpreendimentos.style.display = "flex";
  }
});
