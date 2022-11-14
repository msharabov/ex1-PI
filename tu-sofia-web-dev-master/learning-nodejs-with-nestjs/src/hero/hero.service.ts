import { Inject, Injectable } from '@nestjs/common';
import { Hero } from './hero.model';
import { HeroDto } from './hero.dto';
import { Repository } from 'typeorm';



@Injectable()
export class HeroService {
  constructor(
    @Inject('HERO_REPOSITORY')
    private heroRepository: Repository<Hero>,
  ) {}
  public async findAll(): Promise<Hero[]> {
    return this.heroRepository.find();
  }
}

  //getHeros(universe: string): Hero[]{
  //return this.heroes.filter( (hero) => hero.universe.toLocaleLowerCase() === universe.toLowerCase());
  //}

  //getHeros(universe: string): Hero[]{
    // const filteredHeroes = [];
    // for(let hero of this.heros){
   //  if(hero.universe === universe) {
     //    filteredHeroes.push(hero);
      // }
    // }
     //this.heros.filter( hero => hero.universe === universe)
     //return this.heros;
     //return this.heros.filter(
      // (hero) => hero.universe.toLowerCase() === universe.toLowerCase(),
    // );
    // return this.heros.filter( hero => hero.universe === universe);
   
 


