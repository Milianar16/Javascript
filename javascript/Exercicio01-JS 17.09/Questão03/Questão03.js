function calcular() {
    
    let raio = document.getElementById("raio").value;
    const pi = 3.14;

    let area = pi * raio **2;

    let perimetro = 2*pi* raio;

    alert("Valor da área: " + area + "  valor do perimetro: " + perimetro);
}