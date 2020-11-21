## 10º Desafio

Outra maneira comum de obter dados do cliente é codificar os dados após o caminho da rota, usando uma string de consulta. A string de consulta é delimitada por um ponto de interrogação (?) E inclui pares de campo = valor. Cada par é separado por um E comercial (&). O Express pode analisar os dados da string de consulta e preencher o objeto req.query. Alguns caracteres, como a porcentagem (%), não podem estar em URLs e precisam ser codificados em um formato diferente antes de serem enviados. Se você usar a API do JavaScript, poderá usar métodos específicos para codificar / decodificar esses caracteres.

```
route_path: '/library'
actual_request_URL: '/library?userId=546&bookId=6754'
req.query: {userId: '546', bookId: '6754'}

```

<hr>
<br>

## 10º Challenge

Another common way to get input from the client is by encoding the data after the route path, using a query string. The query string is delimited by a question mark (?), and includes field=value couples. Each couple is separated by an ampersand (&). Express can parse the data from the query string, and populate the object req.query. Some characters, like the percent (%), cannot be in URLs and have to be encoded in a different format before you can send them. If you use the API from JavaScript, you can use specific methods to encode/decode these characters.

```
route_path: '/library'
actual_request_URL: '/library?userId=546&bookId=6754'
req.query: {userId: '546', bookId: '6754'}
```


