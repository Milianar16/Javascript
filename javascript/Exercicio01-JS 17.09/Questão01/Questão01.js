
function calcular() {
    
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;

    let area = base * altura;

    let perimetro = (base * 2)  + (altura * 2);

    alert("Valor da área: " + area + "  valor do perimetro: " + perimetro);
}