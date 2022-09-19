
function calcular() {
    
    let lado = document.getElementById("lado").value;

    let area = lado * lado;

    let perimetro = lado * 4;

    alert("Valor da área: " + area + "  valor do perimetro: " + perimetro);
}