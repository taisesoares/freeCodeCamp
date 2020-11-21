## 7º Desafio

As funções de middleware são funções que recebem 3 argumentos: o objeto de solicitação, o objeto de resposta e a próxima função no ciclo de solicitação-resposta do aplicativo. Essas funções executam alguns códigos que podem ter efeitos colaterais no aplicativo e geralmente adicionam informações aos objetos de solicitação ou resposta. Eles também podem encerrar o ciclo enviando uma resposta quando alguma condição for atendida. Se eles não enviarem a resposta quando terminarem, eles iniciarão a execução da próxima função na pilha. Isso aciona a chamada do terceiro argumento next(),.

Veja o seguinte exemplo:

```
function(req, res, next) {
  console.log("I'm a middleware...");
  next();
}

```

Vamos supor que você montou essa função em uma rota. Quando uma solicitação corresponde à rota, ele exibe a string “Eu sou um middleware ...” e executa a próxima função na pilha. Neste exercício, você criará um middleware de nível raiz. Como você viu no desafio 4, para montar uma função de middleware no nível raiz, você pode usar o app.use(<mware-function>)método. Neste caso, a função será executada para todas as solicitações, mas você também pode definir condições mais específicas. Por exemplo, se quiser que uma função seja executada apenas para solicitações POST, você pode usar app.post(<mware-function>). Existem métodos análogos para todos os verbos HTTP (GET, DELETE, PUT, ...).

<hr>
<br>

## 7º Challenge

Middleware functions are functions that take 3 arguments: the request object, the response object, and the next function in the application’s request-response cycle. These functions execute some code that can have side effects on the app, and usually add information to the request or response objects. They can also end the cycle by sending a response when some condition is met. If they don’t send the response when they are done, they start the execution of the next function in the stack. This triggers calling the 3rd argument, next().

Look at the following example:

```
function(req, res, next) {
  console.log("I'm a middleware...");
  next();
}

```

Let’s suppose you mounted this function on a route. When a request matches the route, it displays the string “I’m a middleware…”, then it executes the next function in the stack. In this exercise, you are going to build root-level middleware. As you have seen in challenge 4, to mount a middleware function at root level, you can use the app.use(<mware-function>) method. In this case, the function will be executed for all the requests, but you can also set more specific conditions. For example, if you want a function to be executed only for POST requests, you could use app.post(<mware-function>). Analogous methods exist for all the HTTP verbs (GET, DELETE, PUT, …).