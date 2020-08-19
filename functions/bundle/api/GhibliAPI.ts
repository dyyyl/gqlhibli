import { RESTDataSource } from 'apollo-datasource-rest';

export default class GhibliAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://ghibliapi.herokuapp.com/';
  }

  async getFilm(id: string): Promise<Record<string, unknown>> {
    return await this.get(`films/${id}`);
  }

  async getFilms(): Promise<Record<string, unknown>> {
    return await this.get('films/');
  }

  async getPerson(id: string): Promise<Record<string, unknown>> {
    return await this.get(`people/${id}`);
  }

  async getPeople(): Promise<Record<string, unknown>> {
    return await this.get('people/');
  }

  async getLocation(id: string): Promise<Record<string, unknown>> {
    return await this.get(`locations/${id}`);
  }

  async getLocations(): Promise<Record<string, unknown>> {
    return await this.get('locations/');
  }

  async getSpecimen(id: string): Promise<Record<string, unknown>> {
    return await this.get(`species/${id}`);
  }

  async getSpecies(): Promise<Record<string, unknown>> {
    return await this.get('species/');
  }

  async getVehicle(id: string): Promise<Record<string, unknown>> {
    return await this.get(`vehicles/${id}`);
  }

  async getVehicles(): Promise<Record<string, unknown>> {
    return await this.get('vehicles/');
  }
}
