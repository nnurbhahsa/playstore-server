# PlayStore Games

A Thinkful drill to introduce Express

## Usage

Clone this repo then install dependencies

    \$ npm install

    \$ npm install nodemon -D

    \$ npm install morgan express

## Start the server

    \$ npm start

## Endpoints

Only one interesting endpoint: /playstore with parameters:

| Parameter | Values           | Description                                                                      |
| :-------- | :--------------- | :------------------------------------------------------------------------------- |
| search    | A string         | return books with that string in the title, if not provided return all books     |
| sort      | by app or rating | sort the results by either app or rating, if not provided no sorting takes place |
