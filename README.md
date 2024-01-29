# Currency Converter

> Currency Converter API.

API to convert currencies using different exchange rates.
Exchange rates are updated automatically every 30 minutes.

## Project

The project was created using the following technologies:

* Docker
* docker-compose
* Node
* MongoDB
* Redis

## Installation

**Using Docker and docker-compose**

Install the npm packages:

`docker compose run --rm api npm install`

Run the script to create suppported currencies:

`docker compose run --rm api npm run seed`

Run the script that loads the initial exchange rates:

`docker compose run --rm api npm run load:rates`

Starting the project:

`docker compose up api`

## Documentation

`http://0.0.0.0:5000/api-docs/`

## Quick examples of use.

Inserting a new currency:

`POST 0.0.0.0:5000/currencies`

```json
BODY
  {
    "symbol": "PHP",
    "label": "Philippine Peso"
  }
```

Getting a currency:

`GET 0.0.0.0:5000/currencies/PHP`

```json
  {
    "_id": "600905bd9640e7037b38209c",
    "label": "Phillipines Test",
    "__v": 0
  }
```

Removing a currency:

`DELETE 0.0.0.0:5000/currencies/PHP`

Converting currencies between different exchange rates:

`GET 0.0.0.0:5000/exchanges/convert?from=USD&to=BRL&amount=123.45`

```json
  {
    "amount": "667.8645"
  }
```

## Running the tests

`docker compose run --rm api npm run test`

## Bonus

In this repository, there is a git submodule (frontend) which is a React project. In it, I demonstrate the use of the Currency Converter API in a web project.\
The project has the Currency Converter API as a dependency, so when you run it, the API must be configured.

Initialize the submodule:

`git submodule init`

Forces the git to clone the submodule:

`git submodule update`

Initialize the frontend app and the backend (API) as dependency:

`docker compose up app`