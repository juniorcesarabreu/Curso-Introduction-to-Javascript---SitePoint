Operadores
=====================================

O que são Operadores?
-------------------------------

Operadores Fazem variáveis fazerem coisas
--------------------------------

Os símbolos que mostram o que está acontecendo a cada variável ou valor em um enunciado são operadores.

````js
var smallNumber = 2; // operador de atribuição
var bigNumber = 2000;

console.log(smallNumber + bigNumber); // operador aritmetico de atribuição

console.log(smallNumber < bigNumber); // operador relacional

````
````sh
2002
true
````

Operadores respondem a tipos
---------------------------------

O mesmo operador pode fazer coisas diferentes a variáveis e valores de tipos diferentes.

````js
var firstWord = "Hello";
var secondWord = "World";

console.log(firstWord + " " + secondWord);
````
````sh
"Hello World"
````
JavaScript é fracamente tipada
------------------------------------

* Variáveis são declaradas sem um tipo
* Variáveis podem manter dados de qualquer tipo
* Variáveis podem manter diferentes tipos em momentos diferentes

Por isso devemos prestar atenção aos tipos
--------------------------------------

* Operações podem depender dos tipos
* Coerção de tipo pode mudar tipos
* Os resultados podem ser surpreendentes

````js
var letter = "A";
var number = 1;

console.log(number + number);
console.log(letter + letter);
console.log(letter + number);
console.log(number + letter);
console.log(letter + letter + number);
console.log(number + number + letter); // soma os dois numeros e depois concatena

````
````sh
2
"AA"
"A1"
"1A"
"AA1"
"2A"
````
