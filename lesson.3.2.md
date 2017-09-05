Operadores Matemáticos
==================================

Adição
------------------

* Adição de números
* Adição (concatenação) de Strings

````js
var smallNumber = 2;
var firstWord = "Hello";
var secondWord = "World";

console.log(1 + 1);
console.log(1 + smallNumber + 3);
console.log(firstWord + " " + secondWord);

````
````sh
2
6
"Hello World"

````

Subtração
------------------------

Funciona somente com números

````js
var smallNumber = 2;
var largeNumber = 2000;
var firstWord = "Hello";
var secondWord = "World";

console.log(largeNumber - smallNumber);
console.log(firstWord - secondWord); // JS não emite erro, mas o resultado não é o esperado

````
````sh
1998
NaN

````

Multiplicação
----------------------------------

Funciona somente com números

````js
var smallNumber = 2;
var largeNumber = 2000;
var firstWord = "Hello";
var secondWord = "World";

console.log(largeNumber * smallNumber);
console.log(smallNumber * firstWord); // JS não emite erro, mas o resultado não é o esperado

````
````sh
4000
NaN

````

Divisão
-------------------------

Funciona somente som números

````js
var smallNumber = 2;
var largeNumber = 2000;
var firstWord = "Hello";
var secondWord = "World";

console.log(largeNumber / smallNumber);
console.log(largeNumber / firstWord); // JS não emite erro, mas o resultado não é o esperado

console.log(firstWord / secondWord);

````
````sh
1000
NaN
NaN
````

Módulo (Resto da divisão)
------------------------------

Valor restante após divisão de números

````js
var smallNumber = 3;
var largeNumber = 10;

console.log(largeNumber / smallNumber);
console.log(largeNumber % smallNumber);

````
````sh
3.333333333333333335
1

````

Operadores de incremento e decremento
----------------------------------------

Adiciona ou subtrai um APÓS a leitura

````js
var smallNumber = 4;

console.log(smallNumber++); // incremento ocorre após a leitura
console.log(smallNumber);
console.log(smallNumber--);
console.log(smallNumber);

````
````sh
4
5
5
4

````

Adiciona ou subtrai ANTES da leitura

````js
var smallNumber = 4;

console.log(++smallNumber); // incremento ocorre antes da leitura
console.log(smallNumber);
console.log(--smallNumber);
console.log(smallNumber);

````
````sh
5
5
4
4

````

Operdaores Unários
--------------------------------

Deriva um valor numérico positivo ou negativo de um:
* Número
* Número como String
* Booleano
* Null

````js
var smallNumber = 3;
var numberString = "33";
var stringWithNumber = "33 Cherry Tree Lane";
var truth = true;
var falsehood = false;
var nullVar = null;
var notDefined;

console.log(-smallNumber);
console.log(+numberString);
console.log(typeof(+numberString));
console.log(-stringWithNumber); // Nao consegue derivar número de string que contenha numero com letras
console.log(+truth);
console.log(+falsehood);
console.log(+nullVar);
console.log(+notDefined);

````
````sh
-3
33
"number"
NaN
1
0
0
NaN

````

Permite converter para número, se não for possível retorna NaN

Precedência
--------------------------------

Operações ocorrem da esquerda para direita dentro de uma expressão

Ordem de operações:
* Parenteses
* Incremento/Unário
* Multiplicação/Divisão/Módulo
* Adição/Subtração


````js
var smallNumber = 4;
var mediumNumber = 8;
var largeNumber = 1000;

console.log(smallNumber + mediumNumber * largeNumber);
console.log((smallNumber + mediumNumber) * largeNumber);
console.log(smallNumber++ * mediumNumber);
console.log(smallNumber);
console.log(largeNumber / --smallNumber); // operador de incremento tem maior precedencia, mas se ele vier após, o incremento será feito somente após a leitura
console.log(smallNumber);
````
````sh
8004
12000
32
5
250
4

````
