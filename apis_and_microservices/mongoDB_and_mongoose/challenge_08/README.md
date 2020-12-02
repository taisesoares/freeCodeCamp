## 8º Desafio

Antigamente, isso era o que você precisava fazer se quisesse editar um documento e ser capaz de usá-lo de alguma forma (por exemplo, enviá-lo de volta em uma resposta do servidor). Mongoose tem um método de atualização dedicado: Model.update(). É vinculado ao driver mongo de baixo nível. Ele pode editar em massa muitos documentos que correspondem a certos critérios, mas não envia de volta o documento atualizado, apenas uma mensagem de 'status'. Além disso, torna as validações de modelo difíceis, porque apenas chama diretamente o driver mongo.


<hr>
<br>

## 8º Challenge

In the good old days, this was what you needed to do if you wanted to edit a document, and be able to use it somehow (e.g. sending it back in a server response). Mongoose has a dedicated updating method: Model.update(). It is bound to the low-level mongo driver. It can bulk-edit many documents matching certain criteria, but it doesn’t send back the updated document, only a 'status' message. Furthermore, it makes model validations difficult, because it just directly calls the mongo driver.

