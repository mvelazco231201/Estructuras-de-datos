console.clear();
var sf=0, sc=0, suma=0, a=0;
var matriz=new Array (8);
var tmp="";
   
for(i=0; i<8; i++){
    matriz[i]= new Array(8);   
}

    matriz[0][0]=0;
    matriz[7][0]=0;
    matriz[0][7]=0;
    matriz[7][7]=0;
for(i=0; i<8;i++){
    for(j=0;j<8;j++){
        matriz[i][j]=Math.ceil(Math.random()*90);//llena la matriz de numeros aleatorios
        suma+=matriz[i][j];
    }
}


for(i=0; i<8; i++){
    sf=0;
    for(j=0;j<8;j++)
    sf+=matriz[i][j];
    
}

    
for(j=0; j<8; j++){
    sc=0;
    for(i=0;i<8;i++)
    sc+=matriz[i][j];
    
}



console.log();
for(i=0;i<8;i++){
    tmp=" ";   
    matriz[i][0]=sf;
    matriz[i][7]=Math.round(sf/6);
    for(j=0;j<8;j++){
    matriz[0][j]=sc;
    matriz[7][j]=Math.round(sc/6);
        tmp=tmp+"  "+matriz[i][j];
    }
    console.log(" "+tmp);
   
    
}
console.log("\n\n Promedio general: "+suma/36);