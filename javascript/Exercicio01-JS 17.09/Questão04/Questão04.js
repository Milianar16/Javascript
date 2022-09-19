function calcular() {
    
    let lado1 = document.getElementById("lado1").value;
    let lado2 = document.getElementById("lado2").value;
    let lado3 = document.getElementById("lado3").value;
    

    let perimetro = Number(lado1) + Number(lado2) + Number(lado3);

    alert("valor do perimetro: " + perimetro);
}