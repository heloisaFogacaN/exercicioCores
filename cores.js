const mudar = document.getElementById("mudar");
var nomeCor = document.getElementById("nomeCor");
const botao = document.getElementById("mudarCorBotao");
let i = 0;

function simple() {

}
function mudarCor() {
    console.log(i);
    if (i < 3) {
        if (i == 0) {
            var j = Math.floor(Math.random() * 3);
            document.body.style.backgroundColor = "red";
            botao.style.backgroundColor = "red";
            if (j == 0) {
                nomeCor.textContent = 'RED';
                j++
            } else if (j == 1) {
                nomeCor.textContent = 'rgb(255, 0, 0)';
                j++
            } else if (j == 2) {
                nomeCor.textContent = 'VERMELHO';
                j = 0;
            }
            i++;
        } else if (i == 1) {
            var j = Math.floor(Math.random() * 3);
            document.body.style.backgroundColor = "blue";
            botao.style.backgroundColor = "blue";
            if (j == 0) {
                nomeCor.textContent = 'BLUE';
                j++
            } else if (j == 1) {
                nomeCor.textContent = 'rgb(0, 0, 255)';
                j++
            } else if (j == 2) {
                nomeCor.textContent = 'AZUL';
                j = 0;
            }
            i++;
        } else if (i == 2) {
            var j = Math.floor(Math.random() * 3);
            document.body.style.backgroundColor = "green";
            botao.style.backgroundColor = "green";
            if (j == 0) {
                nomeCor.textContent = 'GREEN';
                j++
            } else if (j == 1) {
                nomeCor.textContent = 'rgb(0, 255, 0)';
                j++
            } else if (j == 2) {
                nomeCor.textContent = 'VERDE';
                j = 0;
            }
            i++;
        }
    } else {
        i = 0;
    }
}



function mudarCorHex() {
    const cor = geradorDeCor();
    console.log(cor.toString())
    nomeCor.textContent =  cor ;
    document.body.style.backgroundColor = cor;
    botao.style.backgroundColor = cor;
}

function geradorDeCor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');
  
    const cor = `#${hexR}${hexG}${hexB}`;
    return cor;
  }