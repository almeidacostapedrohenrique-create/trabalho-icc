const botoes = document.querySelectorAll(".op");




botoes.forEach(botao => {   
   
    botao.addEventListener("mouseover", ()=>{
        botao.style.transform = "scale(1.065)";
    });
    botao.addEventListener("mouseout", ()=>{
        botao.style.transform = "scale(1)";
    });
});


function em_cima(id){
    const div = document.getElementById(id);
    div.style.transform = "scale(1.065)";
}
function fora(id){
    const div = document.getElementById(id);
    div.style.transform = "scale(1)";
}