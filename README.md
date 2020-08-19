# GQLhibli

GQLhibli is a [GraphQL](http://graphql.org/) wrapper for the [Studio Ghibli REST API](https://ghibliapi.herokuapp.com) by [James Anaipako](https://github.com/janaipakos)

## Usage

Just configure your client to use the endpoint `gqlhibli.netlify.app` 🚀

## Uses

- [Typescript](https://www.apollographql.com/docs/apollo-server/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [apollo-server-lambda](https://www.apollographql.com/docs/apollo-server/deployment/lambda/) - to use `apollo-server` on aws lambda via [Netlify](https://www.netlify.com/).
- [apollo-datasource-rest](https://www.apollographql.com/docs/apollo-server/data/data-sources/) - for coalescing and caching fetches.
- [GraphQL Playground](https://github.com/prisma-labs/graphql-playground) - for easy exploration of this GraphQL server.

Try it out at: <https://gqlhibli.netlify.app/>

## Getting Started

Install dependencies with

```sh
npm run init
```

## Local Server

A local development server is in `./src`. It can be run with:

```sh
npm run start
```

A GraphQL Playground instance will be opened at <http://localhost:4000/> (or similar; the actual port number will be printed to the console) to explore the API.
