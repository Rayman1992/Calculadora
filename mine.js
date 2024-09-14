/*function operation(){
    var result=
    Number(document.getElementById("uno").value)+Number(document.getElementById("dos").value);
    console.log(result);
    var result=
    Number(document.getElementById("uno").value)-Number(document.getElementById("dos").value);
    console.log(result);
}*/

const pantalla = document.querySelector(".display");
const botones = document.querySelectorAll(".numero");

botones.forEach(boton=>{
    boton.addEventListener("click",()=>{
        console.log(boton.textContent)
    })
})



