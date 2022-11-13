import { Injectable } from '@nestjs/common';
import { Hero } from './hero.model';
@Injectable()
export class HeroService {
  heroes: Hero[] = [
    { name: 'Spiderman', powers: ['web', 'strength'], universe: 'Marvel' },
    { name: 'Superman', powers: ['strength', 'laser-eyes'], universe: 'DC' },
    { name: 'Captain America', powers: ['strength'], universe: 'Marvel' },
    { name: 'Batman', powers: ['rich'], universe: 'DC' },
  ];

  getHeros(universe: string): Hero[]{
  return this.heroes.filter( (hero) => hero.universe.toLocaleLowerCase() === universe.toLowerCase());
  }

}
