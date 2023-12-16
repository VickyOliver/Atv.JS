function mostrarAntecessorESucessor() {
    var numero = prompt("Digite um número inteiro:");

    if (numero !== null && !NaN(numero) && numero !== "") {
        numero = parseInt(numero);
        var antecessor = numero - 1;
        var sucessor = numero + 1;

        alert("Antecessor: " + antecessor + "\nSucessor:" + sucessor);
    } else {
        alert("Por favor, digite um número válido.")
    }
}

