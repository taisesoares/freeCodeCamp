## 12º Desafio

Se você não passar o retorno de chamada como o último argumento para Model.find()(ou para os outros métodos de pesquisa), a consulta não será executada. Você pode armazenar a consulta em uma variável para uso posterior. Esse tipo de objeto permite que você crie uma consulta usando a sintaxe de encadeamento. A pesquisa real do banco de dados é executada quando você finalmente encadeia o método .exec(). Você sempre precisa passar seu retorno de chamada para este último método. Existem muitos auxiliares de consulta, aqui usaremos os mais comumente usados.

Leituras adicionais
Se você está ansioso para aprender e quer ir mais fundo, você pode olhar para:

Índices (muito importantes para a eficiência da consulta),
Ganchos pré / pós,
Validação,
Esquema virtual e métodos de modelo, estático e de instância,


<hr>
<br>

## 12º Challenge

If you don’t pass the callback as the last argument to Model.find() (or to the other search methods), the query is not executed. You can store the query in a variable for later use. This kind of object enables you to build up a query using chaining syntax. The actual db search is executed when you finally chain the method .exec(). You always need to pass your callback to this last method. There are many query helpers, here we'll use the most commonly used.


Further Readings
If you are eager to learn and want to go deeper, You may look at:

Indexes ( very important for query efficiency ),
Pre/Post hooks,
Validation,
Schema Virtuals and Model, Static, and Instance methods,