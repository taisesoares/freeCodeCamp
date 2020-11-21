## 12º Desafio

Monte um manipulador POST no caminho /name. É o mesmo caminho de antes. Preparamos um formulário na página inicial do html. Ele enviará os mesmos dados do exercício 10 (Query string). Se o analisador de corpo estiver configurado corretamente, você deve encontrar os parâmetros no objeto req.body. Dê uma olhada no exemplo usual de biblioteca:

```
route: POST '/library'
urlencoded_body: userId=546&bookId=6754
req.body: {userId: '546', bookId: '6754'}

```

Responder com o mesmo objeto JSON como antes: {name: 'firstname lastname'}. Teste se o seu endpoint funciona usando o formulário html que fornecemos na página inicial do aplicativo.

Dica: Existem vários outros métodos http além de GET e POST. E por convenção, há uma correspondência entre o verbo http e a operação que você vai executar no servidor. O mapeamento convencional é:

POST (às vezes PUT) - Crie um novo recurso usando as informações enviadas com a solicitação,

GET - Leia um recurso existente sem modificá-lo,

PUT ou PATCH (às vezes POST) - Atualize um recurso usando os dados enviados,

DELETE => Excluir um recurso.

<hr>
<br>

## 12º Challenge

Mount a POST handler at the path /name. It’s the same path as before. We have prepared a form in the html frontpage. It will submit the same data of exercise 10 (Query string). If the body-parser is configured correctly, you should find the parameters in the object req.body. Have a look at the usual library example:

```
route: POST '/library'
urlencoded_body: userId=546&bookId=6754
req.body: {userId: '546', bookId: '6754'}
```

Respond with the same JSON object as before: {name: 'firstname lastname'}. Test if your endpoint works using the html form we provided in the app frontpage.

Tip: There are several other http methods other than GET and POST. And by convention there is a correspondence between the http verb, and the operation you are going to execute on the server. The conventional mapping is:

POST (sometimes PUT) - Create a new resource using the information sent with the request,

GET - Read an existing resource without modifying it,

PUT or PATCH (sometimes POST) - Update a resource using the data sent,

DELETE => Delete a resource.


