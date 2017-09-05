Operadores de Atribuição
==================================

Atribuição para tipos primitivos
----------------------------------

Atribui o valor para uma variável numérica, string, ou booleana.


````js
var smallNumber = 4;
var largeNumber = 1000;

console.log(smallNumber);

smallNumber = 5;
console.log(smallNumber);

smallNumber = largeNumber;
console.log(smallNumber);

smallNumber = "hello";
console.log(smallNumber);
console.log(largeNumber);
````
````sh
4
5
1000
"hello"
1000
````

Atribuição para tipos de referência
---------------------------------------

Atribui valor para variáveis de Array e Objeto.

````js
var myArray = [1, "hello"];
var newArray = myArray;

console.log(myArray);
console.log(newArray);

newArray[0] = 2; // Mudar newArray muda myArray, porque são referencias para a mesma posição de memória
console.log(myArray);
console.log(newArray);

````
````sh
[1, "hello"]
[1, "hello"]
[2, "hello"]
[2, "hello"]

````

````js
var myObject = {"color": "red", "size": 5};
var newObject = myObject;

console.log(myObject.color);
console.log(newObject.color);

newObject.color = "blue";
console.log(myObject.color);
console.log(newObject.color);
````
````sh
"red"
"red"
"blue"
"blue"
````

Adicição e Subtração de atribuição
------------------------------------

Muda o valor de uma variável primitiva ao adicionar ou subtrair um valor.

Números e Strings podem ser adicionados, mas não subtraídos. Se você tentar, não vai obter um número como resposta.

````js
var firstNumber = 4;
var secondNumber = 1000;
var word = "hello";

firstNumber += secondNumber;
console.log(firstNumber);

firstNumber -= secondNumber;
console.log(firstNumber);

word += firstNumber; // Concatena
console.log(word);

firstNumber -= word;
console.log(firstNumber);
````
````sh
1004
4
"Hello4"
NaN

````

Atribuição de Multiplicação, Divisão e Módulo
---------------------------------------

Muda variáveis numéricas através de atribuição de multiplicação, divisão e módulo (resto)

````js
var firstNumber = 3;
var secondNumber = 1000;
var word = "hello";

firstNumber *= secondNumber;
console.log(firstNumber);

firstNumber /= secondNumber;
console.log(firstNumber);

secondNumber %= firstNumber;
console.log(secondNumber);

firstNumber *= word;
console.log(firstNumber);

````
````sh
3000
3
1
NaN

````

... Não para Variáveis de referencias
-------------------------------------------

Não é boa ideia usar estes operadores em variáveis de referencias. Operadores de atribuição de modificação podem produzir resultados inesperados com variáveis de referencias.

````js
var aNumber = 3;
var arr = [1, 2];
var obj = {"age": 25};

console.log(arr);
console.log(typeof(arr));
console.log(obj.age);
console.log(typeof(obj));

arr += aNumber; // array foi convertido pra string
console.log(arr);
console.log(typeof(arr));

obj += aNumber; // objeto foi convertido para string
console.log(obj.age);
console.log(typeof(obj));
console.log(obj);

````
````sh
[1, 2]
"object"
25
"object"
"1,23"
"string"
undefined
"string"
"[object Object]3"
````
