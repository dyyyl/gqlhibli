const resolvers = {
  Query: {
    film: async (
      _source: unknown,
      { id }: { id: string },
      { dataSources }: { dataSources: any },
    ): Promise<Record<string, unknown>> => {
      return dataSources.ghibliAPI.getFilm(id);
    },

    films: async (
      _source: unknown,
      _: unknown,
      { dataSources }: { dataSources: any },
    ): Promise<Record<string, unknown>> => {
      return dataSources.ghibliAPI.getFilms();
    },

    person: async (
      _source: unknown,
      { id }: { id: string },
      { dataSources }: { dataSources: any },
    ): Promise<Record<string, unknown>> => {
      return dataSources.ghibliAPI.getPerson(id);
    },

    people: async (
      _source: unknown,
      _: unknown,
      { dataSources }: { dataSources: any },
    ): Promise<Record<string, unknown>> => {
      return dataSources.ghibliAPI.getPeople();
    },

    location: async (
      _source: unknown,
      { id }: { id: string },
      { dataSources }: { dataSources: any },
    ): Promise<Record<string, unknown>> => {
      return dataSources.ghibliAPI.getLocation(id);
    },

    locations: async (
      _source: unknown,
      _: unknown,
      { dataSources }: { dataSources: any },
    ): Promise<Record<string, unknown>> => {
      return dataSources.ghibliAPI.getLocations();
    },

    specimen: async (
      _source: unknown,
      { id }: { id: string },
      { dataSources }: { dataSources: any },
    ): Promise<Record<string, unknown>> => {
      return dataSources.ghibliAPI.getSpecimen(id);
    },

    species: async (
      _source: unknown,
      _: unknown,
      { dataSources }: { dataSources: any },
    ): Promise<Record<string, unknown>> => {
      return dataSources.ghibliAPI.getSpecies();
    },

    vehicle: async (
      _source: unknown,
      { id }: { id: string },
      { dataSources }: { dataSources: any },
    ): Promise<Record<string, unknown>> => {
      return dataSources.ghibliAPI.getVehicle(id);
    },

    vehicles: async (
      _source: unknown,
      _: unknown,
      { dataSources }: { dataSources: any },
    ): Promise<Record<string, unknown>> => {
      return dataSources.ghibliAPI.getVehicles();
    },
  },
};

export default resolvers;
