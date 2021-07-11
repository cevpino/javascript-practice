// Código para el cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm")
 
const perimetroDelCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroDelCuadrado + " cm")

const areaDelCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaDelCuadrado + " cm2")
console.groupEnd()

// Código para el triangulo
console.group("Triángulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triángulo miden: " 
    + ladoTriangulo1 + " cm, " 
    + ladoTriangulo2 + " cm, " 
    + baseTriangulo + " cm ")
console.log("La altura del triángulo es: " + alturaTriangulo + " cm")
 
const perimetroDelTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroDelTriangulo + " cm")

const areaDelTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del cuadrado es: " + areaDelTriangulo + " cm2")
console.groupEnd()

// Código para el circulo
console.group("Circunferencia")
const radioCircunferencia = 4;
const diametroCircunferencia = radioCircunferencia * 2;
const pi = Math.PI;

console.log("El radio de la circunferencia es: " + radioCircunferencia + " cm")
console.log("El valor de PI es: " + pi)

const perimetroCircunferencia = diametroCircunferencia * pi;
console.log("El perímetro de la circunferencia es: " + perimetroCircunferencia + " cm")

const areaCircunferencia = pi * (radioCircunferencia * radioCircunferencia);
console.log("El área de la circunferencia es: " + areaCircunferencia + " cm2")
console.groupEnd