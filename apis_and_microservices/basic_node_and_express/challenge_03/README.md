## 3º Desafio

Você pode responder às solicitações com um arquivo usando o res.sendFile(path)método. Você pode colocá-lo dentro do app.get('/', ...)manipulador de rota. Nos bastidores, esse método definirá os cabeçalhos apropriados para instruir seu navegador sobre como lidar com o arquivo que deseja enviar, de acordo com seu tipo. Em seguida, ele lerá e enviará o arquivo. Este método precisa de um caminho de arquivo absoluto. Recomendamos que você use a variável global Node __dirnamepara calcular o caminho assim:

```
absolutePath = __dirname + relativePath/file.ext
```


<hr>
<br>

## 3º Challenge

You can respond to requests with a file using the res.sendFile(path) method. You can put it inside the app.get('/', ...) route handler. Behind the scenes, this method will set the appropriate headers to instruct your browser on how to handle the file you want to send, according to its type. Then it will read and send the file. This method needs an absolute file path. We recommend you to use the Node global variable __dirname to calculate the path like this:

```
absolutePath = __dirname + relativePath/file.ext
```