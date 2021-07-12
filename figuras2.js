// Código para el cuadrado
console.group("Cuadrados")

function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado();

function areaCuadrado(lado){
    return lado * lado;
}
areaCuadrado();
console.groupEnd()

// Código para el triangulo
console.group("Triángulos")
 
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
perimetroTriangulo();

function areaTriangulo(base, altura){
    return ((base * altura) / 2);
}
areaTriangulo();
console.groupEnd()

// Código para el circulo

const pi = Math.PI;

console.log("El valor de PI es: " + pi)

function perimetroCircunferencia(radio){
    return (radio * 2) * pi;
}
perimetroCircunferencia();

function areaCircunferencia(radio){
    return pi * (radio * radio);
} 
areaCircunferencia();
 
console.groupEnd

// Inicia interaccion con el HTML
function calcularPerimetroCuadrado(){
    const lados = document.getElementById("ladoCuadrado");
    const valor = lados.value;
    const perimetroC = perimetroCuadrado(valor);
    alert("El Perímetro del cuadrado es : " + perimetroC);
}

function calcularAreaCuadrado(){
    const lados = document.getElementById("ladoCuadrado");
    const valor = lados.value;
    const areaC = areaCuadrado(valor);
    alert("El área del cuadrado es : " + areaC);
}