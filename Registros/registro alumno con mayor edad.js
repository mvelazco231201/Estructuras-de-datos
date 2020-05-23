var alumno = function(){
    var edad;
    var nombre;
}

var mayor=0;
var n=10;
var vec = new Array(n);

for(i=0; i<n; i++){
    vec[i]= new alumno();
}

for(i=0; i<n; i++){
    vec[i].nombre=String.fromCharCode(65+Math.floor(Math.random()*25))+String.fromCharCode(65+Math.floor(Math.random()*24))+String.fromCharCode(65+Math.floor(Math.random()*25));
    vec[i].edad=16+Math.floor(Math.random()*4);
}

for(i=0; i<n; i++){
    console.log(vec[i].edad + " " + vec[i].nombre);
    if(vec[i].edad > mayor ){
        var a = (mayor = vec[i].edad);
        a = vec[i].nombre;
    }
}

console.log(" ")
console.log("El alumno: "+ a + " es el mayor");