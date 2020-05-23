console.clear();

/* PROGRAMA: VECTOR DE OBJETOS */

/* SE DECLARA LA ESTRUCTURA */
var  alumno = function(){

    var nocontrol = null;
    var nombre = null;
    var sexo = null;
    var edad = null;
    var materias= null;
    var calificaciones=null ;
    var promedio=null;

    
}
var sum=0, prom=0, sf=0, contf=0, sm=0, contm=0, mayorprom=0, mayorcalif=0;
var total = 5;
var vector = new Array(total);

/* SE INICIALIZA UN VECTOR DEL TIPO OBJETO*/
for(i=0;i < total;i++)
{
   
    vector[i] =  new   alumno();
    vector[i].materias = ['MAT_1','MAT_2','MAT_3','MAT_4','MAT_5'];
    vector[i].calificaciones = new Array(5); 
    
    
}


/* SE GENERAN VALORES ALEATORIOS PARA CADA CAMPO*/

for(i=0;i < total;i++)
{
            
    vector[i].nocontrol=Math.floor(Math.random()*2000);

    /* GENERA FORMA ALEATORIA 3 LETRAS SIMULANDO EL NOMBRE ------------------------------*/
        vector[i].nombre=String.fromCharCode(65+Math.floor(Math.random()*25))+String.fromCharCode(65+Math.floor(Math.random()*24))+String.fromCharCode(65+Math.floor(Math.random()*25));
    /*-----------------------------------------------------------------------------------*/
    /* GENERA FORMA ALEATORIA LOS NUMEROS O,1  ---------------------*/
        /* 0 REPRESENTA FEMENINO */
        /* 1 REPRESENTA MASCULINO */
    vector[i].sexo = Math.floor(Math.random()*2);
    /*-----------------------------------------------------------------*/

    /* GENERA DE FORMA ALEATORIA EDADES EN EL RANGO 16-20 */
    vector[i].edad = 16+Math.floor(Math.random()*4);
    /*----------------------------------------------------*/

    /* GENERA DE FORMA ALEATORIA CALIFICACIONES */
    
    var g =0;

    for(j=0;j<5;j++)
    {
        vector[i].calificaciones[j]  = Math.floor(1+Math.random()*10);
    }

 
    
}


/* MUESTRA LOS DATOS ----------------------------------------*/
for(i=0;i < total;i++)
{
    console.log(vector[i].nocontrol,vector[i].nombre,vector[i].sexo,vector[i].edad);
        for(j=0;j<5;j++)
    {
        console.log(vector[i].materias[j],vector[i].calificaciones[j]);
    }
}
/*----------------------------------------------------*/

/*PROMEDIO DE CALIFICACIONES DE CADA ALUMNO ---------------------------------- */
for(i=0; i<total; i++){
    sum=0;
    for(j=0;j<5;j++){
        sum+=(vector[i].calificaciones[j]);
        prom= sum/5;
    }
    vector[i].promedio=prom;
    console.log("El promedio de "+vector[i].nombre+" es: "+prom);
} 

console.log("------------------------------------------------------------");
/*OBTENER NOMBRE DEL ALUMNO CON MAYOR PROMEDIO---------------------------------*/
for(i=0; i<total; i++){
    if(vector[i].promedio>mayorprom){
        var a = (mayorprom = vector[i].promedio);
        a= vector[i].nombre;
    }
} 
console.log("El alumno "+a+" tiene el promedio mayor.");
console.log("------------------------------------------------------------");

/*OBTENER PROMEDIO DE LA MATERIA MAT_2 POR GENERO ------------------------------------*/
for(i=0; i<total; i++){
    if(vector[i].sexo == 0){
        sf+=(vector[i].calificaciones[1]);
        contf++;
    }
    else{
        sm+=(vector[i].calificaciones[1]);
        contm++;
    }
}
console.log("El promedio de mujeres en MAT_2 es: "+sf/contf++);
console.log("El promedio de hombres en MAT_2 es: "+sm/contm++);

console.log("----------------------------------------------");
/*NOMBRE DEL ALUMNO CON CALIFICACION MAYOR EN MAT_2*/
for(i=0; i<total; i++){
    if(vector[i].calificaciones[1] > mayorcalif){
        var b = (mayorcalif=vector[i].calificaciones[1]);
        b= vector[i].nombre;
    }
}
console.log("El alumno "+b+" tiene la mayor calificacion en MAT_2");

console.log("----------------------------------------------");
console.log("UNICAMENTE MUJERES");
/* MUESTRA LOS DATOS UNICAMENTE DE MUJERES-------------------------------------*/
for(i=0;i < total;i++)
{
    
    if( vector[i].sexo==0)
    {
        console.log(vector[i].nocontrol,vector[i].nombre,vector[i].sexo,vector[i].edad);
        for(j=0;j<5;j++)
        {
            console.log(vector[i].materias[j],vector[i].calificaciones[j]);
        }

    }
    
}
/*----------------------------------------------------*/
