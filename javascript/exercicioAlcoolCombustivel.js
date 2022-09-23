/**
 * Um posto está vendendo combustíveis com a seguinte tabela de descontos
 * Álcool - Até 25 litros, descontos de 2% por litro
 * Acima de 25 litros, desconto de 4% por litro
 * 
 * Gasolina -Até 25 litros, desconto de 3% por litro
 * Acima de 25 litros, desconto de 5% por litro
 */



const tipoCombustivel =prompt(`Você irá abastecer com Álcool ou Gasolina? 
Digite A p/ Álcool 
Digite G p /Gasolina
`) 

if (tipoCombustivel == "A") {
    const litrosAlcool = parseFloat(prompt("Quantos litros foi abastecido?"))
if(litrosAlcool <= 25){
    const precoFinal = litrosAlcool * 1.9 - litrosAlcool * 0.02
    alert(" O valor pago foi de " + precoFinal)
}else{
    const precoFinal = litrosAlcool * 1.9 - litrosAlcool * 0.04
    alert(" O valor pago foi de " + precoFinal)
}
    
}

if(tipoCombustivel == "G"){
    const litrosGasolina = parseFloat(prompt("Quantos litros foi abastecido?"))
    if(litrosGasolina <= 25){
        const precoFinal= litrosGasolina * 2.7 - litrosGasolina * 0.03 
        alert("O valor pago foi de " + precoFinal)
    
    }else{
        const precoFinal = litrosGasolina * 2.7 - litrosGasolina * 0.05
        alert(" O valor pago foi de " + precoFinal)
    }
}
