## 8º Desafio

O middleware pode ser montado em uma rota específica usando app.METHOD(path, middlewareFunction). Middleware também pode ser encadeado dentro da definição de rota.

Veja o seguinte exemplo:

```
app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send(req.user);
});

```

Essa abordagem é útil para dividir as operações do servidor em unidades menores. Isso leva a uma melhor estrutura do aplicativo e à possibilidade de reutilizar o código em diferentes lugares. Essa abordagem também pode ser usada para realizar alguma validação nos dados. Em cada ponto da pilha de middleware, você pode bloquear a execução da cadeia atual e passar o controle para funções projetadas especificamente para lidar com erros. Ou você pode passar o controle para a próxima rota correspondente, para lidar com casos especiais. Veremos como na seção Express avançada.
<hr>
<br>

## 8º Challenge

Middleware can be mounted at a specific route using app.METHOD(path, middlewareFunction). Middleware can also be chained inside route definition.

Look at the following example:

```
app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send(req.user);
});

```

This approach is useful to split the server operations into smaller units. That leads to a better app structure, and the possibility to reuse code in different places. This approach can also be used to perform some validation on the data. At each point of the middleware stack you can block the execution of the current chain and pass control to functions specifically designed to handle errors. Or you can pass control to the next matching route, to handle special cases. We will see how in the advanced Express section.

