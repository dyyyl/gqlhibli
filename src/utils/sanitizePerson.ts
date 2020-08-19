const sanitizePerson = async (person, dataSources) => {
  const filmId = person.films[0].split('/films/')[1];
  const speciesId = person.species.split('/species/')[1];

  const film = await dataSources.ghibliAPI.getFilm(filmId);
  const species = await dataSources.ghibliAPI.getSpecimen(speciesId);

  return {
    id: person.id,
    name: person.name,
    gender: person.gender,
    eye_color: person.eye_color,
    hair_color: person.hair_color,
    film,
    species,
    url: person.url,
  };
};

export default sanitizePerson;
