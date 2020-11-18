## 4º Desafio

Um servidor HTML geralmente possui um ou mais diretórios que podem ser acessados ​​pelo usuário. Você pode colocar lá os ativos estáticos necessários ao seu aplicativo (folhas de estilo, scripts, imagens). No Express, você pode colocar em prática essa funcionalidade usando o middleware express.static(path), onde o pathparâmetro é o caminho absoluto da pasta que contém os ativos. Se você não sabe o que é middleware ... não se preocupe, discutiremos em detalhes mais tarde. Basicamente, middleware são funções que interceptam manipuladores de rota, adicionando algum tipo de informação. Um middleware precisa ser montado usando o método app.use(path, middlewareFunction). O primeiro pathargumento é opcional. Se você não passar, o middleware será executado para todas as solicitações.

<hr>
<br>

## 4º Challenge

An HTML server usually has one or more directories that are accessible by the user. You can place there the static assets needed by your application (stylesheets, scripts, images). In Express, you can put in place this functionality using the middleware express.static(path), where the path parameter is the absolute path of the folder containing the assets. If you don’t know what middleware is... don’t worry, we will discuss in detail later. Basically, middleware are functions that intercept route handlers, adding some kind of information. A middleware needs to be mounted using the method app.use(path, middlewareFunction). The first path argument is optional. If you don’t pass it, the middleware will be executed for all requests.