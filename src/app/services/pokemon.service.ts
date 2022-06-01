import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getRandomPokemon(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getPokemonList() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=807');
  }
}
