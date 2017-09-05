Operadores de Comparação
================================

Igualdade para variáveis primitivas
--------------------------------------

O valor de cada variável é o mesmo?

```js
var firstNumber = 5;
var secondNumber = 10;
var firstWord = "hello";
var secondWord = "world";

console.log(firstNumber == firstNumber);
console.log(firstNumber == 5);
console.log(firstNumber == secondNumber);

console.log(firstWord == firstWord);
console.log(firstWord == "hello");
console.log(firstWord == secondWord);
```
```sh
true
true
false
true
true
false
```

Igualdade para variáveis de referencias
-------------------------------------------

Variáveis de referencias não são iguais se elas não referenciam o mesmo objeto na memória.

```js
var arr1 = [1, 2];
var arr2 = [1, 2];
var obj1 = {"color":"red"};
var obj2 = {"color":"red"};

console.log(arr1 == arr1);
console.log(arr1 == [1, 2]); // Embora os valores sejam os mesmos, não referenciam a mesma posição de memória
console.log(arr1 == arr2);

arr2 = arr1;
console.log(arr1 == arr2); // Agora referenciam a mesma posição

console.log(obj1 == obj1);
console.log(obj1 == {"color":"red"});
console.log(obj1 == obj2);

obj2 = obj1;
console.log(obj1 == obj2);
```
```sh
true
false
false
true
true
false
false
true
```

Comparação de tipos diferentes
-----------------------------------

Tipos diferentes serão convertidos para um valor comum primeiro
* Strings para número
* Booleano para número
* Obeto para toString()

```js
var aNumber = 5;
var aString = "5";
var truth = true;
var falsehood = false;
var anObject = {"color":"red"};

console.log(aNumber == aString);
console.log(truth == 1);
console.log(falsehood == 0);
console.log(anObject.toString());
console.log("[object Object]" == anObject);
```
```sh
true
true
true
"[object Object]"
true
```

Igualdade estrita
-----------------------------

O valor e o tipo de ambas variáveis são os mesmos, sem conversão?

```js
var aNumber = 5;
var aString = "5";

console.log(aNumber == aString);
console.log(aNumber === aString);
```
```sh
true
false
```

Desigualdade
----------------------------

Valores são convertidos antes de comparar

Tanto desigualdade ampla como estrita são suportadas

```js
var firstNumber = 5;
var secondNumber = 10;
var numberString = "5";
var firstWord = "hello";
var secondWord = "word";

console.log(firstNumber != secondNumber);
console.log(firstNumber != 5);
console.log(firstNumber != numberString);
console.log(firstNumber !== numberString); // preserva o tipo
console.log(firstWord != secondWord);
console.log(firstWord != "hello");
```
```sh
true
false
false
true
true
false
```

Relação para variáveis numéricas
----------------------------------------

* Maior que
* Maior ou igual
* Menor que
* Menor ou igual

```js
var firstNumber = 5;
var secondNumber = 10;
var numberString = "5";

console.log(firstNumber > secondNumber);
console.log(firstNumber < secondNumber);
console.log(firstNumber >= 5);
console.log(firstNumber <= numberString); // foi coergido
console.log(firstNumber <= numberString); // foi coergido
console.log(secondNumber > firstNumber);
```
```sh
false
true
true
true
true
true
```

Relação para variáveis String
----------------------------------------

String são comparadas letra por letra em ordem por posição no alfabeto.

Todas as letras maiúsculas tem um valor mais baixo do que qualquer outra letra minúscula.

```js
var firstWord = "Hello";
var secondWord = "World";
var thirdWord = "hello";
var fourtWord = "help";

console.log(firstWord > secondWord);
console.log(firstWord < secondWord);
console.log(firstWord >= "Hello");
console.log(firstWord > thirdWord);
console.log(firstWord < thirdWord);
console.log(thirdWord > fourtWord);
```
```sh
false
true
true
false
true
false
```
