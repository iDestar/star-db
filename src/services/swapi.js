export default class SwapiService {

    _apiBase = 'https://swapi.dev/api'
  
  
    async getResource (url) {
      const res = await fetch(`${this._apiBase}${url}`);
    
      if (!res.ok) {
        throw new Error(`Cant getURL`, + `recived  ${res.status}`)
    }
    
      return await  res.json();
   }
  
   async getAllPeople () {
     const res = await this.getResource(`/people`);
     return res.results.map(this._transformPerson)
   }
  
   async getAllPlanets () {
    const res = await this.getResource(`/planets`);
    return res.results.map(this._transformPlanet);
  }
  
  async getAllStarships () {
    const res = await this.getResource(`/starships`);
    return res.results.map(this._transformStarship);
  }
  
   async getPerson (id) {
     const person = this.getResource(`/people/${id}/`);
     return this._transformPerson(person);
   }
  
   async getPlanet (id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
   }
  
   getStarship (id) {
    const starship = this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
   }

   _extractid(item) {
    const idregExp = /\/([0-9]*)\/$/;
    return item.url.match(idregExp)[1];
   }

   _transformPlanet(planet) {

     return {
      id: this._extractid(planet),
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      rotationPeriod: planet.rotation_period
   }
  }
   _transformStarship(starship) {
     return {
       id: this._extractid(starship),
       name: starship.name,
       model: starship.model,
       manufacturer: starship.manufacturer,
       costInCredits: starship.costInCredit,
       length: starship.length,
       crew: starship.crew,
       passengers: starship.passengers,
       cargoCapacity: starship.cargoCapacity
     }
   } 

   _transformPerson(person) {
     return {
       id: this._extractid(person),
       name: person.name,
       gender: person.gender,
       birthYear: person.birthYear,
       eyeColor: person.eyeColor
     }
   }

  };
  