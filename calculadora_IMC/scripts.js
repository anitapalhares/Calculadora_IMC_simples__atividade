const btnEscreve = document.getElementById("btnAlerta");

// evento de clique no botão, criando uma função
btnEscreve.addEventListener("click", () => {
    // bloco que sera feito ao clicar no botao
    let nome = document.getElementById("txtnome").value;
    let altura = document.getElementById("txtaltura").value;
    let peso = document.getElementById("txtpeso").value;
    let imc = (peso / (altura * altura)).toFixed(2);
    // .toFixed(2)   -> arredondar

    if (imc > 0 && imc < 18.5) {
        status = "Status de saúde: abaixo do peso";
    } else if (imc > 18.5 && imc < 25) {
        status = "Status de saúde: peso normal";
    } else if (imc > 25 && imc < 30) {
        status = "Status de saúde: sobrepeso";
    } else if (imc > 30 && imc < 35) {
        status = "Status de saúde: obeso grau 1";
    } else if (imc > 35 && imc < 40) {
        status = "Status de saúde: obeso grau 2";
    } else if (imc > 40) {
        status = "Status de saúde: obeso grau 3";
    } else {
        status = "Erro no input das informações";
    }

    document.getElementById("nome").innerHTML = nome;
    document.getElementById("imc").innerHTML = imc;
    document.getElementById("status").innerHTML = status;
});

// let inputTxtNome = window.prompt("nome");
// let idade = window.prompt("idade");
// entidade.metodo(parametro, parametro, parametro);
// let name = document.getElementById("txtnome").value;