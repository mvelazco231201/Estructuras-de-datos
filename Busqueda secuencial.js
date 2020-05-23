//PROGRAMA QUE IMPLEMENTA LA BUSQUEDA SECUENCIAL
//María Alejandra Velazco Baltazar 2°D

var n=20;
var vec = new Array(n);

for(let i=0; i<n; i++){//llenamos el vector
    vec[i]=Math.floor(Math.random()*10)+1;//Numeros aleatorios del 1 al 10
}
 console.log(vec);
 console.log(" ");

var buscar=1;//valor a buscar en el vector
var j=0;//variable para determinar si se encontro el numero

for(let i=0; i<n; i++){//recorremos el vector
    if(vec[i]==buscar){//si buscar es igual a lo que hay en vec[i]
        console.log("El numero "+buscar+" se encuentra en la posición: "+i);//el numero se encontro
        j=1;// y j lo igualamos a 1
    }   
}
//Si no se encontró el valor al final del ciclo
if(!j){
        console.log("Numero no encontrado.");//no existe en el vector
    }

