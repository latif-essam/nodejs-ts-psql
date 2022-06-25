# nodejs-ts-psql

starter code boilerplate for backend dev with NodeJS, Express, TypeScript, Jasmine, and PostgreSQL.

# Soc-Store

> backend for sunglasses &amp; optics online store

## Contents

1. [About](https://github.com/latif-essam/image-engine/edit/main/README.md#about)
2. [Setup & Run](https://github.com/latif-essam/image-engine/edit/main/README.md#setup--run)
3. [APIs Endpoints](https://github.com/latif-essam/image-engine/edit/main/README.md#apis--endpoints)
4. [Available Scripts](https://github.com/latif-essam/image-engine/edit/main/README.md#available-scripts)
5. [Tools & Pakages used in this App](https://github.com/latif-essam/image-engine/edit/main/README.md#tools--pakages-used-in-this-app)
6. [Database Schema](https://github.com/latif-essam/image-engine/edit/main/README.md#database--schema)

## About

> Soc_store is a backend nodejs built with typescript and connected with postgres database,Its provide a set of features and functionalites for the online Optics & Sunglassess Store.

## Setup & Run

- clone the repo `git clone https://github.com/latif-essam/soc-store.git`
- run `npm i` to install all the depnencies
- globally install the following packages `npm i -g db-migrate`
- create psql user `CREATE USER my_user WITH PASSWORD 'my_password123';`
- Grant user permission to create databases in PostgreSQL using `ALTER USER my_user CREATEDB;`.
- login in with the new user.
- create 2 database on your postgres app for developing and one for testing: `CREATE DATABASE my_db`.
- run `db-migrate up` to create the tables on the database;
- ### create and update the `.env` file as following:

| **env variable**      | **value**                                     | **example**     |
| --------------------- | --------------------------------------------- | --------------- |
| **PORT**              | server port                                   | 3001            |
| **POSTGRES_USER**     | username for postgres                         | my_user         |
| **POSTGRES_PASSWORD** | password for postgres                         | my_password_123 |
| **POSTGRES_DB**       | database name                                 | my_db           |
| **POSTGRES_DB_TEST**  | database for testing purpose                  | my_db_test      |
| **POSTGRES_HOST**     | host of the database                          | localhost       |
| **POSTGRES_PORT**     | Database Port                                 | 5432            |
| **ENV**               | define the type of connection `dev` or `test` | dev             |
| **BCRYPT_PASSWORD**   | secret password for the bcrypt lib            | my_secret_pass  |
| **SALT_ROUNDS**       | no of hasing rounds                           | 8               |
| **SECRET_TOKEN**      | token constatnt name                          | awsome_token    |

## APIs & Endpoints

| route                         | functionality / description                  |
| ----------------------------- | -------------------------------------------- |
| `/`                           | Main Route                                   |
| `/api/users`                  | create new user, get all users               |
| `/api/users/:id`              | get, delete, and update user by id           |
| `/api/auth`                   | authenticate login user info, return a token |
| `/api/products`               | create new product, get all products         |
| `/api/products/:id`           | get, delete, and update product by id        |
| `/api/orders`                 | create new order, get all orders             |
| `/api/orders/:id`             | get, delete, and update order by id          |
| `/api/orders/:id/products`    | get order Products                           |
| `/api/orders/:id/products`    | add product to order                         |
| `/api/categorys`              | create new category, get all categorys       |
| `/api/categorys/:id`          | get, delete, and update category by id       |
| `/api/categorys/:id/prodcuts` | get category products                        |
| `/api/categorys/:id/prodcuts` | add product to category                      |
| `/api/categorys/:id`          | get, delete, and update category by id       |
| `/invalid`                    | handles invalid url / bad requests           |

## Available Scripts

> Note :you have to prefix each command with `npm run scriptName`.

| scripts  | frunctionality                                                                          |
| -------- | --------------------------------------------------------------------------------------- |
| start    | npm run build && node ./dist/index.js                                                   |
| dev      | nodemon src/index.ts                                                                    |
| build    | npm run clean &&set ENV=test&& npx tsc                                                  |
| migrate  | db-migrate --env test up && db-migrate up                                               |
| test     | SET ENV=test&&db-migrate --env test up&&npm run build&&jasmine&&db-migrate db:drop test |
| jasmine  | jasmine                                                                                 |
| lint     | eslint . --ext .ts                                                                      |
| prettier | prettier src/ --write                                                                   |
| clean    | rm -rf ./dist                                                                           |

## Tools & Pakages used in this App

- [db-migrate](https://www.npmjs.com/package/db-migrate)
- [pg](https://www.npmjs.com/package/pg)
- [jwt](https://www.npmjs.com/package/jwt)
- [express](http://expressjs.com/)
- [jasmine](https://jasmine.github.io/)
- [jasmine-spec-reporter](https://www.npmjs.com/package/jasmine-spec-reporter)
- [typescript](http://www.typescriptlang.org/)

## Database Schema:

![db schema](https://github.com/latif-essam/soc-store/blob/main/Database_ER_diagram.png)
