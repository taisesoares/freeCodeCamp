## 10º Desafio

Além de GET, existe outro verbo HTTP comum, é POST. POST é o método padrão usado para enviar dados do cliente com formulários HTML. Na convenção REST, POST é usado para enviar dados para criar novos itens no banco de dados (um novo usuário ou uma nova postagem de blog). Você não tem um banco de dados neste projeto, mas vai aprender como lidar com solicitações POST de qualquer maneira.

Nesse tipo de solicitação, os dados não aparecem na URL, mas ficam ocultos no corpo da solicitação. O corpo é uma parte da solicitação HTTP, também chamada de carga útil. Mesmo que os dados não sejam visíveis no URL, isso não significa que sejam privados. Para ver o motivo, observe o conteúdo bruto de uma solicitação HTTP POST:

```
POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20
name=John+Doe&age=25

```

Como você pode ver, o corpo é codificado como a string de consulta. Este é o formato padrão usado por formulários HTML. Com Ajax, você também pode usar JSON para lidar com dados com uma estrutura mais complexa. Também existe outro tipo de codificação: multipart / form-data. Este é usado para fazer upload de arquivos binários. Neste exercício, você usará um corpo codificado por url. Para analisar os dados provenientes de solicitações POST, você deve instalar o body-parserpacote. Este pacote permite que você use uma série de middleware, que pode decodificar dados em diferentes formatos.

<hr>
<br>

## 10º Challenge

Besides GET, there is another common HTTP verb, it is POST. POST is the default method used to send client data with HTML forms. In REST convention, POST is used to send data to create new items in the database (a new user, or a new blog post). You don’t have a database in this project, but you are going to learn how to handle POST requests anyway.

In these kind of requests, the data doesn’t appear in the URL, it is hidden in the request body. The body is a part of the HTTP request, also called the payload. Even though the data is not visible in the URL, this does not mean that it is private. To see why, look at the raw content of an HTTP POST request:

```
POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20
name=John+Doe&age=25
```

As you can see, the body is encoded like the query string. This is the default format used by HTML forms. With Ajax, you can also use JSON to handle data having a more complex structure. There is also another type of encoding: multipart/form-data. This one is used to upload binary files. In this exercise, you will use a urlencoded body. To parse the data coming from POST requests, you have to install the body-parser package. This package allows you to use a series of middleware, which can decode data in different formats.


