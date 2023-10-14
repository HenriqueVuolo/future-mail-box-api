<h1 align="center">Future MailBox API</h1>

<br>
<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

## :book: About

This repo is part of the `Future MailBox project`, an application that works like a time capsule, allowing users to schedule emails for future delivery. How about writing a "letter" to yourself in 10 years? Or to a child? Making predictions or even setting personal goals? That's the goal of this project.

The project is still under development and is divided into three smaller projects:

- [API](https://github.com/HenriqueVuolo/future-mail-box-api/)
- [Mail Microservice](https://github.com/HenriqueVuolo/mail-microservice) (this repo)
- [Front-End](https://github.com/HenriqueVuolo/future-mail-box-web/)

The idea is to initially develop the core functionalities and then introduce new features.


## :rocket: Techs

- NestJS
- TypeScript
- Prisma
- Docker
- PostgreSQL
- JEST
- Jobs (Cron)
- Kafka

## :gear: Setup
- To start the database container:
```
docker compose up
```
- To run the application:
```
npm run start:dev
```
- To run the migrations:
```
npx prisma migration dev
```

<br><br>
<p align="center">
  <a href="https://www.linkedin.com/in/henrique-vuolo-santana">
  <img src="https://img.shields.io/badge/LinkedIn-Henrique%20Vuolo-blue?logo=linkedin"/></a>
</p>
