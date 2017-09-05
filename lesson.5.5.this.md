This
==============================

Funções para construir objetos
-----------------------------------

Funções podem também ser usadas como templates de objetos, com o comando new.

```js
var example = function(str) {
    this.name = str;
};

var exampleFred = new example("Fred");

var exampleJudy = new example("Judy");

console.log(exampleFred);
console.log(exampleFred.name);
console.log(exampleJudy.name);
```
```sh
[object Object] {
    name: "Fred"
}
"Fred"
"Judy"
```

Usando esta abordagem, você pode criar objetos que podem ser instanciados ao chamar uma função com a palavra-chave new para gerar objetos construídos com propriedades baseadas nos parâmetros que você passa para a função.

Adicionando métodos aos construtores
---------------------------------------

Propriedades e métodos atribuídos a this em um construtor são públicos.


```js
var example = function(str) {
    this.name = str;
    this.greet = function() {
        return("Hello " + this.name);
    };
};

var exampleFred = new example("Fred");
var exampleJudy = new example("Judy");

console.log(exampleFred.greet());
console.log(exampleJudy.greet());
```
```sh
"Hello Fred"
"Hello Judy"
```

Propriedades Públicas e Privadas
------------------------------------------

Variáveis declaradas com var em um construtor são privados para objetos filhos e suas funções.

```js
var example = function(str) {
    var special = "Judy"; // variável privada
    this.name = str;
    this.greet = function() {
        if (this.name === special) {
            return("Well, isn't that special?");
        } else {
        return("Hello " + this.name);
    }
    };
};

var exampleFred = new example("Fred");
var exampleJudy = new example("Judy");

console.log(exampleFred.greet());
console.log(exampleJudy.greet());

console.log(exampleFred.special); // variável privada não acessável fora do objeto
console.log(exampleFred.name);
```
```sh
"Hello Fred"
"Well, isn't that special?"
undefined
"Fred"
```
