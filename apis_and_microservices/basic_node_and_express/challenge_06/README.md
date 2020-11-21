## 6º Desafio

O .envarquivo é um arquivo oculto usado para passar variáveis ​​de ambiente para seu aplicativo. Este arquivo é secreto, ninguém além de você pode acessá-lo e pode ser usado para armazenar dados que você deseja manter privados ou ocultos. Por exemplo, você pode armazenar chaves de API de serviços externos ou o URI de seu banco de dados. Você também pode usá-lo para armazenar opções de configuração. Ao definir as opções de configuração, você pode alterar o comportamento do seu aplicativo, sem a necessidade de reescrever algum código.

As variáveis ​​de ambiente podem ser acessadas no aplicativo como process.env.VAR_NAME. O process.envobjeto é um objeto Node global e as variáveis ​​são passadas como strings. Por convenção, os nomes das variáveis ​​são todos maiúsculos, com palavras separadas por sublinhado. O .envé um arquivo shell, portanto, você não precisa colocar nomes ou valores entre aspas. Também é importante notar que não pode haver espaço ao redor do sinal de igual quando você atribui valores às suas variáveis, por exemplo VAR_NAME=value. Normalmente, você colocará cada definição de variável em uma linha separada.

<hr>
<br>

## 6º Challenge

The .env file is a hidden file that is used to pass environment variables to your application. This file is secret, no one but you can access it, and it can be used to store data that you want to keep private or hidden. For example, you can store API keys from external services or your database URI. You can also use it to store configuration options. By setting configuration options, you can change the behavior of your application, without the need to rewrite some code.

The environment variables are accessible from the app as process.env.VAR_NAME. The process.env object is a global Node object, and variables are passed as strings. By convention, the variable names are all uppercase, with words separated by an underscore. The .env is a shell file, so you don’t need to wrap names or values in quotes. It is also important to note that there cannot be space around the equals sign when you are assigning values to your variables, e.g. VAR_NAME=value. Usually, you will put each variable definition on a separate line.