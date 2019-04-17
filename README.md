# Earthquake GraphQL interface

This project convert the RESTful API from [Earthquake](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) to a GraphQL API.

## requiremenet.
- Node.js (version >= 10.0)
- npm or yarn as package manager

## Development.
run your local machine to install depnedencies

```bash
$ npm install # or yarn
```

after depnedencies installed, run

```bash
$ npm run dev # or yarn dev
```

## How to Query/Mutation in GraphQL
Look query API [here](docs/query-api.md)

## Production
install pm2 to monitor node process

```bash
$ npm install -g pm2
```

start node application via pm2
```
$ pm2 index.js --name "graphql-api"
```

## Test
```bash
$ npm test # or yarn test
```