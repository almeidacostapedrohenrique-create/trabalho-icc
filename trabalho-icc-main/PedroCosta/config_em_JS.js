const botoes = document.querySelectorAll(".op");




botoes.forEach(botao => {   
   
    botao.addEventListener("mouseover", ()=>{
        botao.style.transform = "scale(1.065)";
    });
    botao.addEventListener("mouseout", ()=>{
        botao.style.transform = "scale(1)";
    });
});