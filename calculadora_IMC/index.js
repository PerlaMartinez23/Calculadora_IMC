function calcularIMC() {
    var peso = document.getElementById ('peso').value;
    var altura = document.getElementById('altura').value;
    var imc = peso / (altura * altura);
    document.getElementById('resultado').textContent = imc.toFixed(2);

    if (imc < 18.5) {
        document.getElementById('tipo').textContent = "Bajo Peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById('tipo').textContent = "Adecuado";
    } else if (imc >= 25 && imc <= 29.9) {
        document.getElementById('tipo').textContent = "Sobre Peso";
    } else if (imc >= 30 && imc <= 34.9) {
        document.getElementById('tipo').textContent = "Obesidad Grado 1";
    } else if (imc >= 35 && imc <= 39.9) {
        document.getElementById('tipo').textContent = "Obesidad Grado 2";
    } else if (imc > 40) {
        document.getElementById('tipo').textContent = "Obesidad Grado 3";
    } else {
        alert("Ingrese correctamente valores válidos");
    }
}