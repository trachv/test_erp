## Description

Test task for creating full app:

- backend using node.js, mysql, siqualize-typescript, express, typescript
- frontend using react, mui 

## Before install

You should have mysql server locally
You should be create a new file in backend folder with name '.env' with the following contents:
example: 
HOST_DB="localhost"
PORT_DB=3306
USER_DB="YOUR_USER_DB"
PASSWORD_DB="YOUR_USER_DB_PASSWORD"
NAME_DB="YOUR_DBNAME"
DIALECT="mysql"

## Installation

```bash
$ npm install
```

## Running the app

```bash
# backend - go to backend folder
$ npm run dev

# frontend - go to frontend/project-select folder
$ npm run start
```