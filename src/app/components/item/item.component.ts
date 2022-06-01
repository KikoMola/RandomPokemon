import { Component, OnInit } from '@angular/core';

import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  name = '';
  sprite = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    for (let i = 0; i < 807; i++) {
      this.pokemonService.getPokemonList().subscribe(
        (data: any) => {
          // this.sprite = data.sprites.other.dream_world.front_default;
          // this.name = data.name;
          this.name = data.results[i].name;
          this.sprite = data.results[i].url;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
