function pegarValores() {
    // getElementById pega o input pelo id entre "", e .value pega o que foi digitado
    let valor1 = document.getElementById("valor1").value; 
    let valor2 = document.getElementById("valor2").value;
    
    // se algum campo estiver vazio return null para a função e devolve um valor vazio
    if (valor1 === "" || valor2 === "") {
        alert("Erro! Por favor preencha os dois campos!");
        return null;
    }

    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Erro! Digite apenas valores válidos!");
        return null; // para e devolve valor vazio se for Not a Number
    }

    return {valor1, valor2};
}

function somar() {
    //chama a função que pega e valida os valores inseridos
    let valores = pegarValores();

    // se valores = null (vazio), para a função e não retorna nada
    if (valores === null) return;

    let resultado = valores.valor1 + valores.valor2;
    mostrarResultado(resultado);
}

function subtrair() {
    let valores = pegarValores();

    if (valores === null) return;

    let resultado = valores.valor1 - valores.valor2;
    mostrarResultado(resultado);
}

function multiplicar() {
    let valores = pegarValores();

    if (valores === null) return;

    let resultado = valores.valor1 * valores.valor2;
    mostrarResultado(resultado);
}

function dividir() {
    let valores = pegarValores();

    if (valores === null) return;
    
    // se o segundo valor for zero
    if (valores.valor2 === 0) {
        alert("Erro! Não é possível dividir por 0!");
        return;
    }

    let resultado = valores.valor1 / valores.valor2;
    mostrarResultado(resultado);
}

// função mostrarResultado recebe (resultado)
function mostrarResultado(resultado) {
    // .innerText representa o texto visível do elemento
    document.getElementById("result").innerText = "O resultado da operação é: " + resultado;
}
