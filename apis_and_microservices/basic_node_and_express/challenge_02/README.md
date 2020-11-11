## 2º Desafio

Neste primeiro desafio do curso é necessário criar nossa primeira rota da aplicação.

Vamos servir nossa primeira rota! Em Express, rotas leva a seguinte estrutura: app.METHOD(PATH, HANDLER). METHOD é um método http em minúsculas. PATH é um caminho relativo no servidor (pode ser uma string ou mesmo uma expressão regular). HANDLER é uma função que o Express chama quando a rota é correspondida. Os manipuladores assumem a forma function(req, res) {...}, em que req é o objeto de solicitação e res é o objeto de resposta. Por exemplo, o manipulador

```
function(req, res) {
  res.send('Response String');
}
```

servirá a string 'String de resposta'.

<hr>
<br>

## 2º Challenge

In this first challenge of the course it is necessary to create our first application route.


Let’s serve our first string! In Express, routes takes the following structure: app.METHOD(PATH, HANDLER). METHOD is an http method in lowercase. PATH is a relative path on the server (it can be a string, or even a regular expression). HANDLER is a function that Express calls when the route is matched. Handlers take the form function(req, res) {...}, where req is the request object, and res is the response object. For example, the handler

```
function(req, res) {
  res.send('Response String');
}
```

will serve the string 'Response String'.