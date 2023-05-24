function calculateIMC() {
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var resultDiv = document.getElementById("result");

    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height)) {
        resultDiv.innerHTML = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    var imc = weight / (height * height);
    var classification;

    if (imc < 18) {
        classification = "Abaixo do peso";
    } else if (imc < 25) {
        classification = "Peso normal";
    } else {
        classification = "Acima do peso";
    }

    resultDiv.innerHTML = "Seu IMC é: " + imc.toFixed(2) + "<br>" + "Classificação: " + classification;
}
