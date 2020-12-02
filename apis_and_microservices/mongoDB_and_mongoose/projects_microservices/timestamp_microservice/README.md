## Timestamp Microservice

Crie um aplicativo JavaScript de pilha completa que seja funcionalmente semelhante a este: https://timestamp-microservice.freecodecamp.rocks/.

Seu projeto precisa passar nos seguintes testes:

  - Você deve fornecer seu próprio projeto, não o URL de exemplo.

  - Uma solicitação para /api/timestamp/:date?com uma data válida deve retornar um objeto JSON com uma unixchave que é um carimbo de data / hora Unix da data de entrada em milissegundos

  - Uma solicitação para /api/timestamp/:date?com uma data válida deve retornar um objeto JSON com uma utcchave que é uma string da data de entrada no formato:Thu, 01 Jan 1970 00:00:00 GMT

  - Um pedido para /api/timestamp/1451001600000deve retornar{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }

  - Seu projeto pode lidar com datas que podem ser analisadas com sucesso por new Date(date_string)

  - Se a string de data de entrada for inválida, a API retorna um objeto com a estrutura { error : "Invalid Date" }

  - Um parâmetro de data vazio deve retornar a hora atual em um objeto JSON com uma unixchave

  - Um parâmetro de data vazio deve retornar a hora atual em um objeto JSON com uma utcchave

<hr>
<br>

## Timestamp Microservice

Build a full stack JavaScript app that is functionally similar to this: https://timestamp-microservice.freecodecamp.rocks/.


Your project needs to pass in:

  - You should provide your own project, not the example URL.

  - A request to /api/timestamp/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds

  - A request to /api/timestamp/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT

  - A request to /api/timestamp/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }

  - Your project can handle dates that can be successfully parsed by new Date(date_string)

  - If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }

  - An empty date parameter should return the current time in a JSON object with a unix key

  - An empty date parameter should return the current time in a JSON object with a utc key