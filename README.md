[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

<p align="center">
  <img style="margin: auto" src="https://www.bairesdev.com/wp-content/uploads/2021/07/Expressjs.svg"  alt="Express Logo" />
</p>

<br />

## Express Native Logger and debugger

Se você está cansado de usar o bom e velho `console.log` para depurar seu aplicativo Node.js, o Express traz uma ferramenta que pode tornar sua vida muito mais fácil! 😎

💡 Com o módulo de depuração do Express, você pode aprimorar a exibição dos logs e, o melhor de tudo, filtrá-los para obter informações específicas. 
Isso é super útil quando você está trabalhando em projetos complexos ou depurando aplicativos em execução.

<br />

### Tecnologias Utilizadas

[Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) 🔧

[Express.js](https://expressjs.com/pt-br/) 🚀

[NodeJS](https://nodejs.org/en) 📦

<br />

### Clonando o Projeto

Para clonar o projeto, execute o seguinte comando em seu terminal:
```bash
git clone https://github.com/ruanvsrateira/express-native-logger-and-debug
```

<br />

### Instalação

Após clonar o repositório, navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências:

```bash
$ cd express-native-logger-and-debug
$ npm install
```

<br />

### Rodando a Aplicação

Para iniciar a aplicação execute o seguinte comando:
```bash
# Mostrando todos os logs da aplicação
$ DEBUG=* npm node src/server.js

# Mostrando os logs dos services 
$ DEBUG=api:service* node src/server.js

# Mostrando todos os logs dos controllers
$ DEBUG=api:controller* node src/server.js
```
<br />

### Exemplos de Requisições

Este projeto possui um arquivo chamado requests.http, onde há exemplos de requisições para teste da aplicação

<br />

## Desenvolvido por

Este projeto de teste foi desenvolvido por Ruan Victor. 👨‍💻

Sinta-se à vontade para explorar o projeto, cloná-lo e experimentá-lo! 🚀

