const lista1 = [ 100, 200, 500, 400000000 ];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    }
}
console.log(mitadLista1)

function calcularMedia(lista){
    
    const sumaLista = lista.reduce(
        function (nuevoElemento, valorAcumulado = 0) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = (sumaLista / lista.length);
    return promedioLista;    
}

let mediana;

if (esPar(lista1.length)){
 const elemento1 = lista1[mitadLista1 - 1];
 const elemento2 = lista1[mitadLista1];

 const promedioElemento = calcularMedia([elemento1,elemento2]);

 mediana = promedioElemento;
 console.log("numerito verdadero")
} else {
    mediana = lista1[mitadLista1];
    console.log("numerito falso")
}

console.log(mediana);