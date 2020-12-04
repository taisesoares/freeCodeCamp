## Exercise Tracker

Crie um aplicativo JavaScript de pilha completa que seja funcionalmente semelhante a este: https://exercise-tracker.freecodecamp.rocks/ .

Seu projeto precisa passar nos seguintes testes:

  - Você deve fornecer seu próprio projeto, não o URL de exemplo.

  - Você pode POST para /api/exercise/new-usercom os dados do formulário usernamepara criar um novo usuário. A resposta retornada será um objeto com as propriedades usernamee _id.

  - Você pode fazer uma GET solicitação api/exercise/userspara obter uma matriz de todos os usuários. Cada elemento da matriz é um objeto que contém o usernamee do usuário _id.

  - Você pode POST para /api/exercise/addcom os dados do formulário userId=_id, description, duration, e, opcionalmente date. Se nenhuma data for fornecida, a data atual será usada. A resposta retornada será o objeto do usuário com os campos de exercício adicionados.

  - Você pode fazer uma GET solicitação a /api/exercise/logcom um parâmetro de userId=_idpara recuperar um registro completo do exercício de qualquer usuário. A resposta retornada será o objeto do usuário com uma logmatriz de todos os exercícios adicionados. Cada item log tem as description, duratione datepropriedades.

  - Uma solicitação ao log do usuário ( /api/exercise/log) retorna um objeto com uma countpropriedade que representa o número de exercícios retornados.

  - Você pode adicionar from, toe limitparâmetros para uma /api/exercise/logsolicitação para recuperar parte do log de qualquer usuário. frome tosão datas em yyyy-mm-ddformato. limité um número inteiro de quantos logs enviar de volta.

<hr>
<br>

## Exercise Tracker

Build a full stack JavaScript app that is functionally similar to this: https://exercise-tracker.freecodecamp.rocks/. 


Your project needs to pass in:

  - You should provide your own project, not the example URL.

  - You can POST to /api/exercise/new-user with form data username to create a new user. The returned response will be an object with username and _id properties.

  - You can make a GET request to api/exercise/users to get an array of all users. Each element in the array is an object containing a user's username and _id.

  - You can POST to /api/exercise/add with form data userId=_id, description, duration, and optionally date. If no date is supplied, the current date will be used. The response returned will be the user object with the exercise fields added.

  - You can make a GET request to /api/exercise/log with a parameter of userId=_id to retrieve a full exercise log of any user. The returned response will be the user object with a log array of all the exercises added. Each log item has the description, duration, and date properties.

  - A request to a user's log (/api/exercise/log) returns an object with a count property representing the number of exercises returned.

  - You can add from, to and limit parameters to a /api/exercise/log request to retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back.