//PROGRAMA ORDENAMIENTO BURBUJA MEJORADO
//María Alejandra Velazco Baltazar 2°D

//A diferencia del ordenamiento burbuja, la mejora es la "bandera" para seguir o parar el programa mediante ciclo while
//además de que el vector lo recorremos con un solo for; estas características unidas permite ordenar más rápidamente

var long=5;//longitud del vector
var vec = new Array(long);
	for(let i=0; i<long; i++){
		vec[i]=Math.floor(Math.random()*10);//Llenamos el vector con numeros aleatorios de 0 a 9
	}
console.log("Vector sin ordenar: ")
console.log(vec);//Mostramos el vector sin ordenar
console.log(" ");
var l=long;//l es igual a 5
var bool=true;//Declaramos una variable booleana como verdadera
    do{
		bool=false;//al iniciar el ciclo nuestra variable será falsa
		//Recorremos la lista
		for(let i=0; i<=l; i++){
			//Verificar si los dos valores estan ordenados mediante un if
			if (vec[i]>vec[i+1]){//lo que hay en vec[0]>vec[1]??
				bool=true;//si la condicion es cierta bool se vuelve verdadero
				//Para ordenar...
				var temp=0;//generamos una variable temporal 
				temp=vec[i];//temp toma el valor de lo que hay en vec[i]
				vec[i]=vec[i+1];//a vec[i] le asignamos el valor de lo que hay en vec[i+1]
				vec[i+1]=temp;//vec[i+1] toma el valor de la variable temporal que en este caso era el valor de vec[i]
				
				console.log("Proceso del ordenamiento: ")
				console.log(vec);//aqui se imprimen los movimientos que realiza el programa al ordenar
			}
		  
		}
	}while (bool);//el ciclo se repetirá mientras que bool sea verdadero