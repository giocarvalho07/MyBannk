setTimeout(function ativarMensagem(){
    document.getElementById('caixatexto').style.visibility = 'visible';
},4000)

caixatexto.onclick = function mostrarMensagem (){
    document.getElementById('caixatexto').style.visibility = 'hidden'
}