Olá Analistas, desenvolvedores e recrutadores. Este readme irá apresentar a estrutura deste projeto Playwright com JavaScript de portfólio pessoal para interagir com uma fila Amazon Simple Queue Service (SQS).

* Conhecimento base para utilização dos testes
  - AWS SQS: https://aws.amazon.com/pt/sqs/getting-started/
  - Tutorial como criar e enviar mensagens para fila SQS da AWS: https://aws.amazon.com/pt/getting-started/hands-on/send-messages-distributed-applications/

### Setup necessário ###

* Certifique-se de ter o Node.js, o NPM e playwright instalados.
  ```
  npm init playwright@latest
  ```

* Clone este repositório.


* Execute `npm install` para instalar as dependências.

  ```
  npm install
  ```

### Estrutura do projeto ###

* e2e - Local onde são armazenados todos as classes de testes.
* .github - Local de armazenamento nosso arquivo yml para criar nossa pipeline no github para CICD
* node_modules - pasta contendo os arquivos da instalação cypress
* .gitignore - lista de arquivos que serão ignorados pelo git
* .playwright.config - arquivo de configuração geral do playwright (urlBase, browsers, timeouts....)
* .package.json - arquivo onde são encontrados nossas dependencias instaladas para uso no projeto, dados do projeto e scripts configurados para execução

### Rodando o projeto ###

* Acessa a pasta do projeto
* Rode todas as suites de testes:

```
npm run test
```

### Repositório github ###

* Consulte meu repositório de diversos projetos no github através da url

```
https://github.com/israfaioli?tab=repositories
```

### Medium ###

* Consulte meu medium onde posto semanalmente novos artigos para compartilhar conhecimento aos QAS através da url

```
https://medium.com/@israfaioli
```