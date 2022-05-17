import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RandomPokemon';
  actualPokemon = '';
  image = '';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getRandomPokemon();
    // console.log(this.actualPokemon);
  }
  
  getRandomPokemon() {
    this.pokemonService.getRandomPokemon(Math.floor(Math.random() * 807) + 1).subscribe(
      (data: any) => {
        this.actualPokemon = data.name;
        this.image = data.sprites.other.dream_world.front_default;
        console.log(this.actualPokemon);
      },
      error => {
        console.log(error);
      }
    );
  }
}

