import {
  Film,
  Location,
  Person,
  Specimen,
  Vehicle,
} from '../generated/graphql';

import sanitizePerson from '../utils/sanitizePerson';

const resolvers = {
  Query: {
    film: async (
      _source: unknown,
      { id }: { id: string },
      { dataSources }: { dataSources: any },
    ): Promise<Film> => {
      return dataSources.ghibliAPI.getFilm(id);
    },

    films: async (
      _source: unknown,
      _: unknown,
      { dataSources }: { dataSources: any },
    ): Promise<Array<Film>> => {
      return dataSources.ghibliAPI.getFilms();
    },

    person: async (
      _source: unknown,
      { id }: { id: string },
      { dataSources }: { dataSources: any },
    ): Promise<Record<string, unknown>> => {
      const person = await dataSources.ghibliAPI.getPerson(id);

      return sanitizePerson(person, dataSources);
    },

    people: async (
      _source: unknown,
      _variables: unknown,
      { dataSources }: { dataSources: any },
    ): Promise<Record<string, unknown>> => {
      const people = await dataSources.ghibliAPI.getPeople();

      return people.map((person) => sanitizePerson(person, dataSources));
    },

    location: async (
      _source: unknown,
      { id }: { id: string },
      { dataSources }: { dataSources: any },
    ): Promise<Location> => {
      return dataSources.ghibliAPI.getLocation(id);
    },

    locations: async (
      _source: unknown,
      _variables: unknown,
      { dataSources }: { dataSources: any },
    ): Promise<Array<Location>> => {
      return dataSources.ghibliAPI.getLocations();
    },

    specimen: async (
      _source: unknown,
      { id }: { id: string },
      { dataSources }: { dataSources: any },
    ): Promise<Specimen> => {
      return dataSources.ghibliAPI.getSpecimen(id);
    },

    species: async (
      _source: unknown,
      _variables: unknown,
      { dataSources }: { dataSources: any },
    ): Promise<Array<Specimen>> => {
      return dataSources.ghibliAPI.getSpecies();
    },

    vehicle: async (
      _source: unknown,
      { id }: { id: string },
      { dataSources }: { dataSources: any },
    ): Promise<Vehicle> => {
      return dataSources.ghibliAPI.getVehicle(id);
    },

    vehicles: async (
      _source: unknown,
      _variables: unknown,
      { dataSources }: { dataSources: any },
    ): Promise<Array<Vehicle>> => {
      return dataSources.ghibliAPI.getVehicles();
    },
  },
};

export default resolvers;
