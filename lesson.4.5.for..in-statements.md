Comando for..in
=======================================

Iteração sobre propriedades de objetos
-----------------------------------------

É preciso um array de chaves para cada propriedade, e usar um loop for para iterar através dele.

```js
var toy = {"color": "red", "size": "large", "shape": "round"};

var toyProperties = Object.keys(toy);
console.log(toyProperties);

var counter;
var style;

for(counter = 0; counter < toyProperties.length; counter++) {
    style = toyProperties[counter];
    console.log("The " + style + " is " + toy[style] + ".");
}
```
```sh
["color", "size", "shape"]
"The color is red."
"The size is large."
"The shape is sharpe."
```

Sintaxe for..in  para propriedades de objetos
-----------------------------------------

O iterador for..in itera através de cada propriedade, atribuindo o nome da propriedade para a variável

```js
var toy = {"color": "red", "size": "large", "shape": "round"};


for(style in toy) {
    console.log("The " + style + " is " + toy[style] + ".");
}
```
```sh
"The color is red."
"The size is large."
"The shape is sharpe."
```

Não use sintaxe de ponto em loops
----------------------------------

A sintaxe de ponto não reconhecerá a variável como propriedade. Ela irá procurar por uma propriedade nomeada desta forma dentro do objeto.

```js
var toy = {"color": "red", "size": "large", "shape": "round"};


for(style in toy) {
    console.log("The " + style + " is " + toy.style + ".");// não use sintaxe de ponto
}
```
```sh
"The color is undefined."
"The size is undefined."
"The shape is undefined."
```

A ordem não é garantida
------------------------------------

Diferente de uma array, propriedades de um objeto não são acessados em uma ordem em particular. Esteja preparado!
