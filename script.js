var peso;
var altura;
var imc;
var resultado;



function calcular() {
    
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso / (altura * altura);
    
    
    if (imc < 17) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Muito abaixo do Peso ou ' + imc.toFixed(2)+'kg/m';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;

    } else if (imc < 18.5) {
        
        resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Abaixo do Peso ou ' + imc.toFixed(2)+'kg/m';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;


    } else if (imc > 18.5 && imc < 24.99) {

        resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Peso Normal ou ' + imc.toFixed(2)+'kg/m';
        return false;
    } else if (imc > 25 && imc < 29.99) {

        resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Sobrepeso ou ' + imc.toFixed(2)+'kg/m';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    } else if (imc > 30 && imc <= 34.99) {
        
        resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Obesidade Grau I ou ' + imc.toFixed(2)+'kg/m';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;

    } else if (imc > 35 && imc <= 39.99) {

        resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Obesidade Grau II ou ' + imc.toFixed(2)+'kg/m';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;



    } else if (imc > 40) {

        resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Obesidade Grau III ou ' + imc.toFixed(2)+'kg/m';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    }

}