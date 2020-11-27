## 3º Desafio

Dentro da createAndSavePersonfunção, crie uma instância de documento usando o Personconstrutor de modelo que você construiu antes. Passa para o construtor de um objecto tendo os campos name, agee favoriteFoods. Seus tipos devem estar em conformidade com os do personSchema. Em seguida, chame o método document.save()na instância do documento retornado. Passe para ele um retorno de chamada usando a convenção de nó. Este é um padrão comum; todos os métodos CRUD a seguir recebem uma função de retorno de chamada como essa como o último argumento.

<hr>
<br>

## 3º Challenge

Within the createAndSavePerson function, create a document instance using the Person model constructor you built before. Pass to the constructor an object having the fields name, age, and favoriteFoods. Their types must conform to the ones in the personSchema. Then, call the method document.save() on the returned document instance. Pass to it a callback using the Node convention. This is a common pattern; all the following CRUD methods take a callback function like this as the last argument.