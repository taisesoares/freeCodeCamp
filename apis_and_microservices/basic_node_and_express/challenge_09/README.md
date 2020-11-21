## 9º Desafio

Ao construir uma API, temos que permitir que os usuários nos comuniquem o que desejam obter de nosso serviço. Por exemplo, se o cliente está solicitando informações sobre um usuário armazenado no banco de dados, ele precisa de uma forma de nos informar em qual usuário está interessado. Uma forma possível de obter esse resultado é usando parâmetros de rota. Os parâmetros de rota são segmentos nomeados da URL, delimitados por barras (/). Cada segmento captura o valor da parte do URL que corresponde à sua posição. Os valores capturados podem ser encontrados no req.paramsobjeto.

```
route_path: '/user/:userId/book/:bookId'
actual_request_URL: '/user/546/book/6754'
req.params: {userId: '546', bookId: '6754'}

```

<hr>
<br>

## 9º Challenge

When building an API, we have to allow users to communicate to us what they want to get from our service. For example, if the client is requesting information about a user stored in the database, they need a way to let us know which user they're interested in. One possible way to achieve this result is by using route parameters. Route parameters are named segments of the URL, delimited by slashes (/). Each segment captures the value of the part of the URL which matches its position. The captured values can be found in the req.params object.

```
route_path: '/user/:userId/book/:bookId'
actual_request_URL: '/user/546/book/6754'
req.params: {userId: '546', bookId: '6754'}

```


