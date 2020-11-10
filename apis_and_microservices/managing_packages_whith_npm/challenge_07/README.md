## 7º Desafio

Neste desafio do curso é necessário alterar o dependencia dentro do packege.json.

Versionsdos pacotes npm na seção de dependências de seu arquivo package.json seguem o que é chamado Semantic Versioning (SemVer), um padrão da indústria para versionamento de software com o objetivo de facilitar o gerenciamento de dependências. Bibliotecas, frameworks ou outras ferramentas publicadas no npm devem usar o SemVer para comunicar claramente que tipo de mudanças os projetos podem esperar caso sejam atualizados.

Conhecer o SemVer pode ser útil quando você desenvolve software que usa dependências externas (o que você quase sempre faz). Um dia, a compreensão desses números o salvará de introduzir acidentalmente alterações importantes em seu projeto, sem entender por que coisas que funcionaram ontem de repente não funcionam hoje. É assim que funciona o Versionamento Semântico de acordo com o site oficial:

```
"package": "MAJOR.MINOR.PATCH"
```

A versão MAJOR deve ser incrementada quando você faz alterações incompatíveis na API. A versão MINOR deve incrementar quando você adiciona funcionalidade de maneira compatível com versões anteriores. A versão PATCH deve incrementar quando você faz correções de bug compatíveis com versões anteriores. Isso significa que os PATCHes são correções de bugs e os MINORs adicionam novos recursos, mas nenhum deles quebra o que funcionava antes. Por fim, os MAJORs adicionam alterações que não funcionam com versões anteriores.

<hr>
<br>

## 7th Challenge

In this challenge of the course it is necessary to change the dependencies within packege.json.


Versions of the npm packages in the dependencies section of your package.json file follow what’s called Semantic Versioning (SemVer), an industry standard for software versioning aiming to make it easier to manage dependencies. Libraries, frameworks or other tools published on npm should use SemVer in order to clearly communicate what kind of changes projects can expect if they update.

Knowing SemVer can be useful when you develop software that uses external dependencies (which you almost always do). One day, your understanding of these numbers will save you from accidentally introducing breaking changes to your project without understanding why things that worked yesterday suddenly don’t work today. This is how Semantic Versioning works according to the official website:

```
"package": "MAJOR.MINOR.PATCH"
```

The MAJOR version should increment when you make incompatible API changes. The MINOR version should increment when you add functionality in a backwards-compatible manner. The PATCH version should increment when you make backwards-compatible bug fixes. This means that PATCHes are bug fixes and MINORs add new features but neither of them break what worked before. Finally, MAJORs add changes that won’t work with earlier versions.
