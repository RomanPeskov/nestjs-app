## Description

The "Cars API" server is a REST API server for working with cars data. The server provides the following functionality:

1. CRUD operations for selecting one or more cars, creating, updating and deleting cars.

2. Fetch only manufacturer data for a given car.

3. Trigger a process which automatically remove the owners who bought their cars before the last 18 months.

4. Trigger a process which automatically applies a discount of 20% to all cars having a date of first registration berween 12 and 18 months.

## Installation

To run the application, you need Docker and Docker Compose installed on your machine.

Run this docker-compose command to run the app:
```bash
$ docker-compose up --build
```

This command will create the Postgres database and install all the necessary dependencies for launching the project. After this is complete, the application will be run on port 3000.

## Database connection

Use the following configurations if you need to connect your client to the database:

```bash
Host: localhost
Port: 5432
Database: ultra
User: admin
Password: admin
```

## Documentation

To see the Swagger documentation, open a browser and navigate to: http://localhost:3000/api
