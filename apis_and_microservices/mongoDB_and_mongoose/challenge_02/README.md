## 2º Desafio

Em primeiro lugar, precisamos de um Schema. Cada esquema é mapeado para uma coleção MongoDB. Ele define a forma dos documentos dentro dessa coleção. Os esquemas são blocos de construção para modelos. Eles podem ser aninhados para criar modelos complexos, mas, neste caso, manteremos as coisas simples. Um modelo permite que você crie instâncias de seus objetos, chamados documentos.

Repl.it é um servidor real, e em servidores reais as interações com o banco de dados acontecem em funções de manipulador. Essas funções são executadas quando algum evento acontece (por exemplo, alguém atinge um endpoint em sua API). Seguiremos a mesma abordagem nestes exercícios. A done()função é um retorno de chamada que nos diz que podemos prosseguir depois de concluir uma operação assíncrona, como inserir, pesquisar, atualizar ou excluir. Ele está seguindo a convenção do Node e deve ser chamado done(null, data)em caso de sucesso ou done(err)erro.

Aviso - Ao interagir com serviços remotos, podem ocorrer erros!

```
const someFunc = function(done) {
  //... do something (risky) ...
  if (error) return done(error);
  done(null, result);
};

```



<hr>
<br>

## 2º Challenge

First of all we need a Schema. Each schema maps to a MongoDB collection. It defines the shape of the documents within that collection. Schemas are building block for Models. They can be nested to create complex models, but in this case we'll keep things simple. A model allows you to create instances of your objects, called documents.

Repl.it is a real server, and in real servers the interactions with the database happen in handler functions. These functions are executed when some event happens (e.g. someone hits an endpoint on your API). We’ll follow the same approach in these exercises. The done() function is a callback that tells us that we can proceed after completing an asynchronous operation such as inserting, searching, updating, or deleting. It's following the Node convention, and should be called as done(null, data) on success, or done(err) on error.

Warning - When interacting with remote services, errors may occur!

```
const someFunc = function(done) {
  //... do something (risky) ...
  if (error) return done(error);
  done(null, result);
};

```