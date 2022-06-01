import { Component, OnInit } from '@angular/core';

import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  title = 'RandomPokemon';
  actualPokemon = '';
  sprite = '';
  spriteShiny = '';
  datos = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getRandomPokemon();
    setInterval(() => {
      this.getRandomPokemon();
    }, 5000);
  }

  getRandomPokemon() {
    this.pokemonService
      .getRandomPokemon(Math.floor(Math.random() * 807) + 1)
      .subscribe(
        (data: any) => {
          this.actualPokemon = data.name;
          this.sprite = data.sprites.other.dream_world.front_default;
          this.datos = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
