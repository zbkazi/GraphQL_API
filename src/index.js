const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');


const app = express();

// Construct a schema using GraphQL schema language
const schema = buildSchema(`
  type Query {
    me: User
  }

  type User {
    id: Int
    name: String
    username: String
    email: String
    address: Address
    phone: String
    website: String
    company: Company
  }

  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }

  type Geo {
    lat: String
    lng: String
  }

  type Company {
    name: String
    catchPhrase: String
    bs: String
  }
`);

// Sample data for the user
const userData = {
  id: 1,
  name: 'John Doe',
  username: 'johndoe',
  email: 'john.doe@example.com',
  address: {
    street: '123 Main St',
    suite: 'Apt 101',
    city: 'Anytown',
    zipcode: '12345',
    geo: {
      lat: '123.456',
      lng: '789.012',
    },
  },
  phone: '123-456-7890',
  website: 'example.com',
  company: {
    name: 'Example Inc',
    catchPhrase: 'Hello world',
    bs: 'Lorem ipsum',
  },
};

// The root provides resolver functions for each API endpoint
const root = {
  me: () => userData,
};

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to GraphQL!',
    userData: userData,
  });
}); // <-- Closing curly brace added here

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable GraphiQL GUI for testing
}));

app.listen(4000, function() {
  console.log('GraphQL server running at http://localhost:4000/graphql');
});
