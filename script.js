document.addEventListener("DOMContentLoaded", () => {

    function gerarSaudacao() {
        const saudacao = document.getElementById("saudacao_inicio");
        const hora = new Date().getHours();
        let mensagem;

        if (hora < 12) {
            mensagem = "☀️ Bom dia!";
        } else if (hora < 18) {
            mensagem = "🌤️ Boa tarde!";
        } else {
            mensagem = "🌙 Boa noite!";
        }

        saudacao.innerText = mensagem;
    }
    gerarSaudacao();

    const btnTopo = document.getElementById("rollBack");

    //Mostra o botão quando rolar para baixo
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    });

    // Clica e sobe suavemente
    btnTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
