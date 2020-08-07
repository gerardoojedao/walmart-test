# Walmart test

Test for walmart that consists of a web application to search for products

## Technologies

* Go (backend)
* React + Redux (frontend)
* Mongo (database)
* Material-Ui (presentation)
  
## Configuration 

For the server it is necessary to deliver the information about environment variables
```
cd server/keys
touch .env
```

Add the following variables to file

```
MONGO_URL=mongodb://{host}:{port}/{db}
MONGO_DB={db_name}
PORT={port}
```

## Testing 

#### Server

```
cd server
go test
```

#### Client

```
cd client
yarn test
```

## Run 

```
docker-compose up 
```

The application will be running on [http://localhost:3000](http://localhost:3000)
