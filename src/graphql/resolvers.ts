import {
  Film,
  Location,
  Person,
  Specimen,
  Vehicle,
} from '../generated/graphql';

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
    ): Promise<Person> => {
      return dataSources.ghibliAPI.getPerson(id);
    },

    people: async (
      _source: unknown,
      _: unknown,
      { dataSources }: { dataSources: any },
    ): Promise<Array<Person>> => {
      return dataSources.ghibliAPI.getPeople();
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
      _: unknown,
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
      _: unknown,
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
      _: unknown,
      { dataSources }: { dataSources: any },
    ): Promise<Array<Vehicle>> => {
      return dataSources.ghibliAPI.getVehicles();
    },
  },
};

export default resolvers;
