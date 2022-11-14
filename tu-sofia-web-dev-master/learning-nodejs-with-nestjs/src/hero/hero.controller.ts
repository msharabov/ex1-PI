import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HeroDto } from './hero.dto';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private heroService: HeroService) {}

  @Get()
  async getAllHeroes() {
    const heroes = await this.heroService.findAll();
    return heroes;
  }
}