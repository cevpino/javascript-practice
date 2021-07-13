
const lista1 = [ 100, 200, 300, 500, ];

function calcularMedia(lista){
    // let sumaLista = 0;

    // for(let valorLista1 of lista){
    //    sumaLista = sumaLista + valorLista1;
    // }
    
    const sumaLista = lista.reduce(
        function (nuevoElemento, valorAcumulado = 0) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = (sumaLista / lista.length);
    return promedioLista;    
}

