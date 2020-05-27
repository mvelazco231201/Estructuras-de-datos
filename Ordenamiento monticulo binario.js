//PROGRAMA MONTICULO BINARIO
//María Alejandra Velazco Baltazar 2°D

const arr= [ 1, 12, 9, 5, 6, 10 ];

sort(arr);//enviamos nuestro array a la funcion

console.log(arr)//imprime nuestro array ordenado


function sort(arr) {//funcion que realiza el ordenamiento
  let n = arr.length;//n es el largo de nuestro array

  // Construir montón máximo
  for (let i = n / 2 - 1; i >= 0; i--) {//este for encuentra los padres
    heapify(arr, n, i);//el array, el largo de nuestro array y la posicion del padre encontrado se manda a heapificar 
  }       //para mantener la propiedad del max-heap que consiste en que el padre tiene que ser mayor a sus hijos

  // Heap sort
  for (let i = n - 1; i >= 0; i--) {//este for me ordena los elementos 
  //colocandolos de atrás hacia adelante (del más grande al más chico)
    let temp = arr[0];//realizamos el intercambio mediante una variable temporal
    arr[0] = arr[i];//el padre más grande irá a la ultima posicion
    arr[i] = temp;//y lo que hay en la ultima posicion se ira a la "raíz"
//en cada vuelta de for a la "utima posicion" se le resta 1

    // heapificamos elemento raíz para continuar manteniendo la propiedad 
    heapify(arr, i, 0);
  }
}


function heapify(arr, n, i){
 // Encuentra el más grande entre raíz, hijo izquierdo e hijo derecho
  let largest = i;//posicion del padre
  let l = 2 * i + 1;//posicion del hijo izquierdo (izq)
  let r = 2 * i + 2;//posicion del hijo derecho (der)
//n es el largo del array
  if (l < n && arr[l] > arr[largest]){//si la posicion de izq es menor a n y lo que hay en la pos izq es mayor al padre
    largest = l;//el hijo izquierdo se vuelve padre 
  }
    

  if (r < n && arr[r] > arr[largest]){//si la posicion de der es menor a n y lo que hay en la pos der es mayor al padre
    largest = r;//el hijo derecho se vuelve padre 
  }

  // Intercambie y continúe apilando si la raíz no es más grande 
  if (largest != i) {//si el padre obtenido  es diferente del padre por decirlo "actual"
    let swap = arr[i];//se hace un intercambio de posicion mediante una variable temporal
    arr[i] = arr[largest];//lo que habia en [i] obtendrá el valor de [largest]
    arr[largest] = swap;//y [largest] obtendra swap
//necesitamos seguir heapificando en el elemento raíz repetidamente hasta que sea más grande que sus hijos o se convierta en un nodo hoja
    heapify(arr, n, largest);
  } 
}
 


  
  