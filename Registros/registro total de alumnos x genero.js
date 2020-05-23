var alumno = function(){
    var sexo;
}

var contF=0, contM=0;
var n=10;
var vector = new Array(n);

for(i=0; i<n; i++){
    vector[i] = new alumno();
}

for(i=0; i<n; i++){
    vector[i].sexo=Math.floor(Math.random()*2);//genera aleatoriamente 0 y 1 (0 = fem) (1 = mas)
}

for(i=0; i<n; i++){
    if(vector[i].sexo == 0){
        contF++;
    }
    else{
        contM++;
    }
}

console.log("Total de mujeres: "+contF + "\n" + "Total de hombres: "+contM);
