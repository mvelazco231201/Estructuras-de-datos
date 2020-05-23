console.clear();
var matriz = new Array(4);
var c=1, suma=0, o=1, sumaFil, sumaCols;
var tmp= "";

for(i=0; i<4; i++){
    matriz[i]= new Array(5);
}

for(i=0; i<4;i++){
    for(j=0;j<5;j++){
        matriz[i][j]=Math.floor(Math.random()*150)+1;
        suma+=matriz[i][j];
    }
} console.log("Promedio general "+suma/20);


for(i=0;i<4;i++){
    tmp="";
    for(j=0;j<5;j++){
        tmp=tmp+" "+matriz[i][j];
    }
    console.log(tmp);
}

for(i=0; i<4; i++){//este for ira recorriendo las filas 
    sumaFil=0;//suma los valores de la fila y se iguala a cero para que al finalizar el ciclo sume la siguiente fila
    for(j=0; j<5; j++){//este for recorre los elementos de la columna que pertenecen a la fila
    sumaFil+=matriz[i][j];//realiza una suma interactiva entre todos los elementos de la matriz que encuentre en dicha fila 
}
    console.log("promedio fila "+ c++ + ": " + sumaFil/5);
}

for(j=0; j<5; j++){
    sumaCols=0;
    for(i=0;i<4;i++){
    sumaCols+=matriz[i][j];
}
    console.log("promedio columna " + o++ + ": " + sumaCols/4);
}