const click = document.getElementById("mapa");
const click2 = document.getElementById("bosses");
const click3 = document.getElementById("Amuleto");
const click4= document.getElementById("Historia");
const click5 = document.getElementById("poderzin");
const click6 = document.getElementById("npc");


const botoes = document.querySelectorAll(".op");





click.addEventListener("click", () => {
    window.location.href = "C:/Users/labcaxias/Desktop/PEDRO/trabalho-icc-main/PedroCosta/MAPA.html";
});

click2.addEventListener("click", () => {
    window.location.href = "C:/Users/labcaxias/Desktop/PEDRO/trabalho-icc-main/PedroCosta/Bosses.html";
});

click3.addEventListener("click", () => {
    window.location.href = "C:/Users/labcaxias/Desktop/PEDRO/trabalho-icc-main/PedroCosta/MAPA.html";
});

click4.addEventListener("click", () => {
    window.location.href = "C:/Users/labcaxias/Desktop/PEDRO/trabalho-icc-main/PedroCosta/MAPA.html";
});

click5.addEventListener("click", () => {
    window.location.href = "C:/Users/labcaxias/Desktop/PEDRO/trabalho-icc-main/PedroCosta/MAPA.html";
});

click6.addEventListener("click", () => {
    window.location.href = "C:/Users/labcaxias/Desktop/PEDRO/trabalho-icc-main/PedroCosta/MAPA.html";
});

botoes.forEach(botao => {   
   
    botao.addEventListener("mouseover", ()=>{
        botao.style.transform = "scale(1.065)";
    });
    botao.addEventListener("mouseout", ()=>{
        botao.style.transform = "scale(1)";
    });
});