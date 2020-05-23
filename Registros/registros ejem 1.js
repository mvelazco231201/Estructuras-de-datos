console.clear();

/* DECLARAMOS COMO UN OBJETO*/
 var alumno = function()
 {

    var nocontrol;
    var nombre;
    var email;
        
}

/* SE CREA INSTANCIAS DEL OBJETO*/
 a = new alumno();
 b = new alumno();


 /* SE ASIGANAN VALORES */
a.nocontrol = "202046810";
a.nombre = "ANDREA"
a.email ="andrea@gmail.com";

b.nocontrol ="2020123456";
b.nombre = "ALEJANDRO"
b.email = "alejandro@gmail.com";

/* SE MUESTRAN RESULTADOS */
console.log(a.nocontrol);
console.log(a.nombre);
console.log(a.email);
console.log("----");
console.log(b.nocontrol);
console.log(b.nombre);
console.log(b.email);