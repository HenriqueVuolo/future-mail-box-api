<h1 align="center">Future MailBox API</h1>

<br>
<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

## :book: Sobre
Este repositório faz parte do projeto `Future MailBox`, uma aplicação que funciona como uma cápsula do tempo, na qual o usuário pode cadastrar e-mails para serem enviados no futuro. Que tal escrever uma "carta" para você em 10 anos? Ou para um filho? Fazer previsões ou até mesmo definir metas pessoais? Esse é o objetivo desse projeto.

O projeto ainda está em desenvolvimento e é divido em três projetos menores:

- [API](https://github.com/HenriqueSantana1/future-mail-box-api/) (Pronto)
- [Mail Microservice](https://github.com/HenriqueSantana1/mail-microservice) (Pronto - Este repositório)
- [Front-End](https://github.com/HenriqueSantana1/future-mail-box-web/) (Em desenvolvimento)

A ideia é desenvolver primeiramente as funcionalidades principais e então trazer novas funcionalidades.



## :rocket: Tecnologias

- NestJS
- TypeScript
- Prisma
- Docker
- PostgreSQL
- JEST
- Jobs (Cron)
- Kafka

## :gear: Setup
- Para subir *container* com o banco de dados:
```
docker compose up
```
- Para rodar a aplicação:
```
npm run start:dev
```
- Para rodar as *migrations*:
```
npx prisma migration dev
```

<br><br>
<p align="center">
  <a href="https://www.linkedin.com/in/henrique-vuolo-santana">
  <img src="https://img.shields.io/badge/LinkedIn-Henrique%20Vuolo-blue?logo=linkedin"/></a>
</p>
