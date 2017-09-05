
Operadores Lógicos
================================

Lógico And
-------------------------

Valores múltiplos separados por duplo & retornará true se todos os valores são true

Se não há nenhum booleanos, e o resultado é true, o último valor será retornado.

```js
var truth = true;
var falsehood = false;
var firstWord = "Hello";
var secondWord = "World";

console.log(truth && truth);
console.log(truth && falsehood);
console.log((3 < 4) && ("Apple" < "Banana"));
console.log(firstWord && secondWord); // retorna o último valor que é avaliado como true
console.log(secondWord && firstWord);
console.log(falsehood && firstWord);
```
```sh
true
false
true
"World"
"Hello"
false
```

Lógico Or
-------------------------------

Múltiplos valroes separados por duplos pipes | retornará true se algum dos valores for true.

Se não há nenhum outro valor true, o primeiro valor true será retornado.

```js
var truth = true;
var falsehood = false;
var firstWord = "Hello";
var secondWord = "World";

console.log(falsehood || falsehood);
console.log(truth || falsehood);
console.log((3 < 4) || ("Banana" > "Apple")); // apos comparar a primeira expressão e for true, js não compara a segunda por questões de eficiência
console.log(firstWord || secondWord); // retorna o primeiro valor que é avaliado como true
console.log(secondWord || firstWord);
console.log(falsehood || firstWord);
```
```sh
false
true
true
"Hello"
"World"
"Hello"
```

Lógico Not
---------------------------

Um único ponto de exclamação negará o valor booleano de uma variável ou expressão.

```js
var truth = true;
var falsehood = false;

console.log(!truth);
console.log(!falsehood);
console.log(!(3 < 4));
console.log(!(3 < 4) || !("Banana" < "Apple"));
```
```sh
false
true
false
true
```

Lógico Not para variáveis primitivas
----------------------------------------

O valor booleano que qualquer String ou número não-vazio e não-zero com Not é considerado false.

O valor booleano de uma string vazia, uma valor zero, ou uma variável nula ou indefinida com Not é considerada true.


```js
var word = "Hello";
var empty = "";
var negative = -10;
var zero = 0;
var nullValue = null;
var notDefined;

console.log(!word);
console.log(!empty);
console.log(!negative);
console.log(!zero);
console.log(!nullValue);
console.log(!notDefined);
```
```sh
false
true
false
true
true
true
```

Derivando um valor booleano
-------------------------------------

Dois pontos de exclamação (Not Not) irá converter uma variável primitiva para seu equivalente booleano.

O valor booleano de qualquer string ou número não-vazio e não-zero é true. O valor booleano de uma string vazia, um valor zero, ou uma variável nula ou indefinida é false

```js
var word = "Hello";
var empty = "";
var negative = -10;
var zero = 0;
var nullValue = null;
var notDefined;

console.log(!!word);
console.log(!!empty);
console.log(!!negative);
console.log(!!zero);
console.log(!!nullValue);
console.log(!!notDefined);
```
```sh
true
false
true
false
false
false
```

Precedencia de operadores lógicos
-------------------------------------

Avaliação de operadores lógicos sempre é da esquerda para direita.

```js
var truth = true;
var falsehood = false;

console.log(truth && truth && truth);
console.log(truth && falsehood && truth); // como falsehood é falso, o último valor nunca será avaliado
console.log(truth || falsehood || truth); // somente o valor será avaliado
console.log(truth && falsehood || truth);
console.log(truth || falsehood && truth);
console.log(truth || falsehood && falsehood); // operador And tem precedencia sobre Or
console.log(truth && falsehood || falsehood);
```
```sh
true
false
true
true
true
true
false
```
