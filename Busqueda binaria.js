//PROGRAMA QUE IMPLEMENTA LA BUSQUEDA BINARIA
//María Alejandra Velazco Baltazar 2°D

var long=20;
var vecPar = new Array(long);
var suma=0;
for(let i=0; i<long; i++){
    vecPar[i]= suma+=2;//llenamos el vector con numeros par
}
console.log("vector de números par: ")
console.log(vecPar);//mostramos el vector
console.log(" ");

busquedaBinaria(vecPar, 22);//llenamos los parametros de la funcion

function busquedaBinaria(vec, buscar){
    var min=0;//posicion inicial del vector
    var max= vec.length-1;//posocion final del vector
    var medio;//a calcular...
    while(min<=max){//el ciclo se ejecuta mientras que min sea menor a max
        medio=Math.floor((min+max)/2);//divide el vertor en dos partes iguales
        if(vec[medio]===buscar){//determina si medio es igual al parametro a buscar
            return console.log("Numero encontrado en la posicion: "+medio);//si es asi devuelve la posicion del vector
        }
        else if(vec[medio]<buscar){//en caso de que el elemento sea mayor a medio
            min=medio+1;//min lo recorremos uno más de lo que "valía" medio
        }
        else{
            max=medio-1; //si el elemento a buscar es menor a medio
        }//max lo recorremos uno menos de lo que "valía" medio
    }
    return console.log("Numero no encontrado")//si la condicion en while se rompe, no se encontro el elemento
}