# Future MailBox API

Este repositório faz parte do projeto `Future MailBox`, uma aplicação que funciona como uma cápsula do tempo, na qual o usuário pode cadastrar e-mails para serem enviados no futuro. Que tal escrever uma "carta" para você em 10 anos? Ou para um filho? Fazer previsões ou até mesmo definir metas pessoais? Esse é o objetivo desse projeto.

O projeto ainda está em desenvolvimento e a ideia é desenvolver primeiramente apenas as principais funcionalidades. Este repositório contém a primeira versão da *API*. O próximo passo será o desenvolvimento do *front-end* (*NextJS*) e após isso o *Microservice* de envio de e-mail. Com essas três bases prontas o foco será trazer novas funcionalidades.

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

## Tecnologias

- NestJS
- TypeScript
- Prisma
- Docker
- PostgreSQL
- JEST
- Kafka (será implementado no futuro para comunicação com o *microservice*.);

## Setup
- Sobe *container* com o banco de dados:
  - `docker compouse up`
- Roda aplicação:
  - `npm run start:dev`
- Roda *migrations*:
  - `npx prisma migration dev`
