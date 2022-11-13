import { Controller, Get, Query } from '@nestjs/common';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService : HeroService ) {
    
  }

  @Get()
  getHeros(@Query('universe') universe: string){
    return this.heroService.getHeros(universe);
  }

}
