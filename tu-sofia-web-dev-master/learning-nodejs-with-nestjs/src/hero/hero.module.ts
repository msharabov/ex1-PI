import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { HeroService } from './hero.service';
import { heroProviders } from './hero.providers';
import { HeroController } from './hero.controller';
@Module({
  //imports: [ConfigModule.forRoot()],
  imports:[DatabaseModule],
  controllers: [HeroController],
  providers: [...heroProviders,HeroService],
})
export class HeroModule {}
