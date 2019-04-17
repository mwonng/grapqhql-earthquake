# Earthquake GraphQL interface
This project are create by Node.js version 10 +

This project turn the result from Earthquake result to a GraphQL interface.

## requiremenet.
- Node.js (version >= 10.0)
- npm or yarn as package manager

## Development.
run your local machine

```bash
$ npm install # or yarn
```

```bash
$ npm run dev # or yarn dev
```

## How to query/mutation
Look query API [here](docs/query-api.md)

## Production
install pm2 to monitor node process

```bash
$ npm install -g pm2
```

start node application via pm2
```
pm2 index.js --name "graphql-api"
```

## Test

```bash
npm test # or yarn test
```