Sintaxe
===============

Como os elementos de uma linguagem são arranjadas de modo que elas possam ser processadas e compreendidas consistentemente.

Variáveis
================
Nomeiam pedaços de dados que podem tomar vários valores enquanto um programa está sendo executado.

```js
var example = "coffee";
console.log(example);
```
```sh
"coffee"
```

Variáveis em Javascript podem ser atribuídas com qualquer tipo de dados. JS é conhecida como linguagem tipada dinamicamente.

Tipos da Dados
===================
Os diferentes tipos de informação que podem ser armazenadas em uma variável, tais como números, letras, ou grupos de outras variáveis.

```js
var first = 1;
console.log(typeof(example));
console.log(typeof(first));
```
```sh
"string"
"number"
```

Case Sensitive, Comentários e Palavras Reservadas
=====================
Javascript é case sensitive

```js
var example = "coffee";
var Example = "tea";
console.log(example);
console.log(Example);
```
```sh
"coffee"
"tea"
```

Comentários são úteis para que os programadores entendam o código. Comentários são ignorados pelo compilador.
```js
// Comentário de uma linha

/*
Comentário de múltiplas linhas
*/
```

Regras para nomear variáveis
=============================

* Pode conter somente letras, números, $, ou _
* Não podem começar com número
* Não pode ser uam palavra reservada do JavaScript

```js
var this = "thing"; // erro: palavra reservada
var 2nd = 2; // erro: começa com número
```

Lista de palavras reservadas que não podem ser usadas: [](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6.1)

Definição de variável
===========================

Variáveis são pedaços de dados nomeados, armazenados em memória, que podem ser escritos, lidos e modificados.

* Simbólicos
    + Qualque variável pode suportar qualquer valor de qualquer tipo.
    + Sujeitas a mudanças.
    + Refere-se a um único valor em um dado momento.

Características de uma variável
==================================

* Nome - como você referencia o dado.
* Tipo - O tipo de informação armazenada ali.
* Valor - A informação rela armazenada.
* Localização na memória- o espaço em memória.
* Escopo - Onde a variável pode ser vista.
* Lifespan - Se a variável existe, antes de ser definida ou após ser destruida, a variável não existe.

Passos para usar uma variável
====================================

* Declará-la
* Atribuir-lhe um valor
* Ler o valor

Porque temo que declarar variáveis antes de usá-las?
========================================================

* Escopo Global
    Variáveis com escopo global pode ser acessadas por qualquer programa JavaScript em execução.
* Executar bem com outros
    Muitas páginas simultaneamente carrega múltiplos scripts de diferentes fontes.
* Elevação (Hoisting) de variável
    Não importa onde a variável foi declarada, o compilador carregará elas para o início do escopo, antes de executar qualquer código.
* ECMAScript 5 "use strict"
    Ao colocar a string "use strict" no início do programa, força o compilador a não aceitar variáveis que não tenha sido declaradas com `var` antes do seu uso.
* Declarar e inicializar ao mesmo tempo.


String Primitivas
=======================

São como variáveis primitivas. Variáveis primitivas passam seu valor quando copiados, deixando o original inalterado.

Alguns métodos e propriedades de string
=========================================

Propireades diz informações sobre o conteúdo da variável sem alterá-lo.

* length
* toUppercase()
* toLowerCase()
* charAt(position) // retorna a letra na string na posiçõa especificada
* indexOf(substring) // indice do início da substring

```js
var sentence = "A sentence is a string.";

console.log(sentence.length);
console.log(sentence.toLowerCase);
console.log(sentence.charAt(0));
console.log(sentence.indexOf("is"));
```
```sh
23
"A SENTENCE IS A STRING."
"a sentence is a string."
"A"
11
```

Alguns métodos de busca de string
===================================

* replace(orig, new) // substitui uma substring original com uma nov substring
* substring(start, end) // retorna a substring entre o ponto de inicio e fim, o fim é opcional
* substr(start, lenght) // similar ao anterior, usa o ponto de inicio e o numero de caracteres que contam a partir deste inicio.

```js
var sentence = "A sentence is a string.";

console.log(sentence.replace("sentence", "word"));
console.log(sentence.substring(2, 10));
console.log(sentence.substr(2, 8));
```
```sh
"a word is a string."
"sentence"
"sentence"
```

Variáveis Numéricas
=============================

Também são tipos primitivos. Diferente de outras linguagens, JavaScript trata todos os números como valores de ponto flutuante.

Métodos numéricos
---------------------------

* parseInt() // Obter o valor inteiro de um número
* parseFloat()
* toString() // Converte um número para string
* toFixed() // similar ao anterior, mas limita o numero de dígitos após o ponto decimal.
* toPrecision() // similar, limita em número de dígitos, tanto a parte inteira como a decimal

```js
var example = 5.5;

console.log(parseInt(example, 10)); // o 10 indica a base, não passá-lo pode acontecer de ser processado em outra base e dar um valor diferente
console.log(example.toString());
console.log(example.toFixed(2)); // 2 digitos após o ponto
console.log(example.toPrecision(3)); // 3 dígitos no total
```
```sh
5
"5.5"
"5.50"
"5.50"
```

Números que não são números
----------------------------------

Os métodos anteriores precisam ser executados sobre variáveis que contenham números, senão dará erro.

Um valor impossível para um número resulta no valor NaN, que siginifica "Not a Number"

```js
var notNumber = 5 * "word";

console.log(notNumber);
console.log(typeof(notNumber)); // Apesar de não ser um número, é do tipo number. Tome cuidado.
```
```sh
NaN
"number"
```

Booleanos
================================

Quando uma expressão pode ser avaliadas como `true` ou `false`, o resultado é um valor booleano.

```js
var value1 = 1;
var value2 = 2;

var same = (value1 == value2);

console.log(same);
```
```sh
false
```

Coerção e Comparação booleana
-------------------------------------

* Comparar com `==` força o tipo a corresponder, os tipos serão convertidos se necessário.
* Comparar com `===` preserva o tipo.

```js
var value1 = 1;
var value2 = "1";

var same = (value1 == value2); // os valores não coergidos para string antes da comparação
console.log(same);

var exact = (value1 === value2); // preserva os tipos
console.log(exact);
```
```sh
true
false
```

Operadores de Comparação Booleanos
---------------------------------------

| Operador |    Descrição                        |
|:--------:|:-----------------------------------:|
|    ==    |     corresponde com coerção         |
|   ===    |     correspondencia exata           |
|    >     |     Maior que                       |
|    >=    |     Maior que ou igual              |
|    <     |     Menor que                       |
|    <=    |     Menor que ou igual              |
|    !=    |     Não igual                       |
|   !==    |     Não exato                       |


Valores true
---------------------------------------

Qualquer valor "real" que não é vazio ou igual a zero retornará true.

```js
console.log(Boolean(1));
console.log(Boolean("Word"));
console.log(Boolean(-1000));
```
```sh
true
true
true
```

Valores false
----------------------------------------

Zero, strings vazias, variáveis indefinidas e valores NaN todos retornarão false.

```js
var valueless;
var notNumber = 2 * "Word";

console.log(Boolean(valueless));
console.log(Boolean(notNumber));
console.log(Boolean(""));
console.log(Boolean(0));
```
```sh
false
false
false
false
```

Null e Undefined
======================================

Variáveis indefinidas
-------------------------------------

Uma variável que tem sido declarada porém ainda não lhe foi atribuído valor é indefinida (undefined). Undefined é o tipo desta variável e o valor booleano de um undefined é false.

```js
var newVariable;

console.log(typeof(newVariable));
console.log(Boolean(newVariable));
```
```sh
"undefined"
false
```

Variáveis Nulas
-----------------------------------

Uma variável pode ser setada para null ao destruir seu valor, então ela virtualmente para de existir.

Estranhamente, Javascript reportará o tipo de uma variável null como "object".

```js
var newVariable = 1;

console.log(typeof(newVariable));
console.log(Boolean(newVariable));

newVariable = null;

console.log(typeof(newVariable));
console.log(Boolean(newVariable));

```
```sh
"number"
true
"object"
false
```

Nulos e Indefinidos são Iguais?
------------------------------------

Nulos e indefinidos são correspondentes, porém não exatamente correspondentes.

```js
var notInitialized;
var setToNull = null;

console.log(notInitialized == setToNull);
console.log(notInitialized === setToNull);
```
```sh
true
false
```
