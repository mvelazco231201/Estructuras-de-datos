//PROGRAMA ORDENAMIENTO BURBUJA
//María Alejandra Velazco Baltazar 2°D

var long=5;//longitud del vector
var vec = new Array(long);
	for(let i=0; i<long; i++){
		vec[i]=Math.floor(Math.random()*10);//Llenamos el vector con numeros aleatorios de 0 a 9
	}
console.log("Vector sin ordenar: ")
console.log(vec);//Mostramos el vector sin ordenar
console.log(" ");
var l=long;//l es igual a 5

		//Recorremos el vector
		for(let i=0; i<=l; i++){
            for (let j=0; j<l; j++){
			//Verificar si los dos valores estan ordenados mediante un if
			if (vec[j]>vec[j+1]){//lo que hay en vec[0]>vec[1]??
				//Para ordenar...
				var temp=0;//generamos una variable temporal 
				temp=vec[j];//temp toma el valor de lo que hay en vec[j]
				vec[j]=vec[j+1];//a vec[j] le asignamos el valor de lo que hay en vec[j+1]
				vec[j+1]=temp;//vec[j+1] toma el valor de la variable temporal que en este caso era el valor de vec[j]
				
				console.log("Proceso del ordenamiento: ")
				console.log(vec);//aqui se imprimen los movimientos que realiza el programa al ordenar
			}
		  
		}
	}