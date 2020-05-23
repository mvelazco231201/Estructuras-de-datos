console.clear();

/* PROGRAMA: VECTOR DE OBJETOS */

/* SE DECLARA LA ESTRUCTURA */
var  alumno = function(){

    var nocontrol;
    var nombre;
    var sexo;
    var edad;
}

var total = 25;
var vector = new Array(total);

/* SE INICIALIZA UN VECTOR DEL TIPO OBJETO*/
for(i=0;i < total;i++)
{
   
    vector[i] =  new   alumno();
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
 
    
}


/* MUESTRA LOS DATOS ----------------------------------------*/
for(i=0;i < total;i++)
{
    console.log(vector[i].nocontrol,vector[i].nombre,vector[i].sexo,vector[i].edad);
}
/*----------------------------------------------------*/


console.log("UNICAMENTE MUJERES");
/* MUESTRA LOS DATOS UNICAMENTE DE MUJERES-------------------------------------*/
for(i=0;i < total;i++)
{
    
    if( vector[i].sexo==0)
    {
        console.log(vector[i].nocontrol,vector[i].nombre,vector[i].sexo,vector[i].edad);

    }
    
}
/*----------------------------------------------------*/