import { gql } from 'apollo-server';

const typeDefs = gql`
  type Film {
    id: String!
    title: String
    description: String
    director: String
    producer: String
    release_date: Int
    rt_score: Int
  }

  type Person {
    id: String!
    name: String
    gender: String
    eye_color: String
    hair_color: String
    films: [String]
    species: String
    url: String
  }

  type Location {
    id: String!
    name: String
    climate: String
    terrain: String
    surface_water: Int
    residents: [String]
    films: [String]
    url: String
  }

  type Specimen {
    id: String!
    name: String
    classification: String
    eye_colors: String
    hair_colors: String
    people: [String]
    films: [String]
    url: String
  }

  type Vehicle {
    id: String!
    name: String
    description: String
    vehicle_class: String
    length: String
    pilot: String
    films: String
    url: String
  }

  type Query {
    "Returns information about a single Studio Ghibli film by string ID."
    film(id: String!): Film
    "Returns information about all Studio Ghibli films."
    films: [Film]

    # "Returns information about a single Studio Ghibli character by string ID."
    person(id: String!): Person
    # "Returns information about all Studio Ghibli characters."
    people: [Person]

    # "Returns information about a single Studio Ghibli location by string ID."
    location(id: String!): Location
    # "Returns information about all Studio Ghibli locations."
    locations: [Location]

    # "Returns information about a single Studio Ghibli species by string ID."
    specimen(id: String!): Specimen
    # "Returns information about all Studio Ghibli species."
    species: [Specimen]

    # "Returns information about a single Studio Ghibli vehicle by string ID."
    vehicle(id: String!): Vehicle
    # "Returns information about all Studio Ghibli vehicles."
    vehicles: [Vehicle]
  }
`;

export default typeDefs;
