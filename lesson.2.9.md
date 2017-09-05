Tipos de referência
===================

Arrays para valores sequenciais
-------------------------------------

Armazena multiplos valores em uma única variável

```js
var words = ["This", "is", "an", "array"];

console.log(words);
console.log(words[0]);

words[0] = "That";
console.log(words[0]);
```
```sh
["This", "is", "an", "array"]
"This"
["That", "is", "an", "array"]
```

Arrays são armazenados por referência
-------------------------------------------

Diferente de variáveis primitivas (eg: String ou Número) o valor de um array refere a uma localização compartilhada na memória.

Quando você atribui um array a outro array, na verdade você está passando um ponteiro para uma localização compartilhada na memória. Então, se for feita alguma alteração no primeiro array, acontecerá o mesmo no segundo array.

```js
var words1 = ["This", "is", "an", "array"];
var words2 = words1; // copia um ponteiro para a localização

console.log(words1);
console.log(words2);

words2[0] = "That";
console.log(words1);
console.log(words2);
```
```sh
["This", "is", "an", "array"]
["This", "is", "an", "array"]
["That", "is", "an", "array"]
["That", "is", "an", "array"]
```

Um array pode armazenar diferentes tipos
----------------------------------------------

Adicionar itens para um array vazio, começa com o slot 0.

Se você pular slots, os valores são preenchidos como undefined.

```js
var things = [];
var words = ["another", "array"];

things[0] = words;
things[2] = 2;
things[3] = true;

console.log(things);
console.log(typeof(things[0]));
console.log(typeof(things[1]));
console.log(typeof(things[2]));
console.log(typeof(things[3]));
```
```sh
[["another", "array"], undefined, 2, true]
"object"
"undefined"
"number"
"boolean"
```

Array são flexíveis e permite armazenar qualquer tipos de dados e aninhá-los, podendo ser muito úteis para representar dados mais complexos.

Algumas propriedades e métodos dos Arrays
-----------------------------------------

* Acessores retornam valores
    + length
    + toString() // converte para string
    + join() // coonverte para string, mas permite definir um separador

* Modificadores mudam Arrays
    + reverse() // reverte a ordem dos elementos
    + sort() // ordena os valores
    + push() // permite adicionar elemento no fim do array
    + pop() // permite remover elemento do fim do array

```js
var words = ["these", "are", "some", "words"];

console.log(words.length);
console.log(words.reverse());
console.log(words.sort());
console.log(words.toString());
console.log(words.join(" # "));
console.log(words.push("augmented"));
console.log(words.pop());
console.log(words);
```
```sh
4
["words", "some", "are", "these"]
["are", "some", "these", "words"]
"are,some,these,words"
"are # some # these # words"
5
"augmented"
["are", "some", "these", "words"]
```

Criar Arrays de Strings
-----------------------------------

Use o método split() para dividir uma string em um array de coisas menores.

```js
var sentence = "This is a sentence";
var odds = "1,3,5,7,9";

var words = sentence.split(" ");
var oddArray = odds.split(",")

console.log(words);
console.log(oddArray);

var chunks = sentence.split("s");
console.log(chunks);

var singleItem = sentence.split("Q");
console.log(singleItem);
```
```sh
["This", "is", "a", "sentence"]
["1", "3", "5", "7", "9"]
["Thi"," i", " a ", "entence"]
["This is a sentence"]
```

Objetos por pares chave:valor
-----------------------------------------

Armazene propriedades como chaves e valores em objetos.

````js
var toy;

// par chave:valor
toy = {"color":"red", "size":5, "soft":true};

console.log(toy);
console.log(toy["color"]);
console.log(toy.color); // notação de ponto
````
````sh
[object Object] {
    color: "red",
    size: 5,
    soft: true
}
"red"
"red"
````

Objetos podem armazenar Tipos diferentes
---------------------------------------------------

Adicione propriedades a um objeto vazio ao atribuí-los um valor.

Objetos podem armazenar qualquer tipo de dado ou variável. Da mesma forma que arrays, podem aninhar para criar tipos de dados mais complexos. Por exemplo: arrays que possuem objetos q possuem arrays.

````js
var toy = {};

toy.name = "Cardboard Box";
toy.tags = ["imagination", "recyclable", "cats"];
toy.size = {
    "units": "inches",
    "width": 10,
    "height": 5,
    "depth": 3
};
toy.quantity = 2;

console.log(toy.tags[1]);
console.log(toy.size.units);

````sh
"recyclable"
"inches"
````

Objetos são armazenados por referência
-----------------------------------------

Como arrays, Objetos podem ser modificados por algum valor que está configurado para referenciar o mesmo objeto.

````js
var toy;
toy = {"color":"red", "size":5, "soft":true};
toy2 = toy; // referencia para toy

console.log(toy.color);
console.log(toy2.color);

toy2.color = "blue";

console.log(toy.color);
console.log(toy2.color);
````
````sh
"red"
"red"
"blue"
"blue"
````

Comparando Primitivo e Referência
---------------------------------------

* Primitivo (String, Number, Boolean)
    + Independente
    + Apenas um valor
    + Não pode criar propriedades ou métodos em instâncias

* Referência (Object, Array, Function)
    + Tamanho arbitrário
    + Memória compartilhada
    + Um ou mais valores
    + Pode criar propriedades e métodos em instâncias
