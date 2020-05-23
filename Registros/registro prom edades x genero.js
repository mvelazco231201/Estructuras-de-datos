var alumno = function(){
    var edad;
    var sexo;
}

var sf=0, conf=0, s=0, cont=0;
var n=10;
var vector = new Array(n);

for(i=0; i < n; i++){
    vector[i] = new alumno();
}

for(i=0; i<n; i++){
    vector[i].edad=15+Math.floor(Math.random()*5); //genera edades de 15 a 20
    vector[i].sexo=Math.floor(Math.random()*2); //genera 0 y 1 (0 = fem) (1 = mas)
}

for(i=0; i<n; i++){//recorre vector
    if(vector[i].sexo == 0){//si el vector en posicion i de sexo = 0 se ejecuta los siguiente:
        sf+=(vector[i].edad);//suma los valores de "edad" que están en la posición del sexo
        conf++;//contabiliza las veces que se sumó
        console.log("Edad Femenina: "+vector[i].edad);//imprime la edades de ese sexo
    }
    else if(vector[i].sexo == 1){
        s+=(vector[i].edad);//suma los valores de "edad" que están en la posición del sexo
        cont++;//contabiliza las veces que se sumó
        console.log("Edad Masculina: "+ vector[i].edad);
    }
}

/*
for(i=0; i<n; i++){ es lo mismo que lo de arriba pero separado por generos posteriormente considere
    if(vector[i].sexo == 1){ que dentro de un solo recorrido se puede sumar y promediar las edades de cada sexo
        s+=(vector[i].edad);
        cont++;
        console.log(vector[i].edad);
    }
}*/

console.log("--------")
console.log("El promedio de las edades de las mujeres es: " + sf/conf);
console.log("El promedio de las edades de los hombres es: " + s/cont);
