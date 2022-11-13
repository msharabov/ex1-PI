import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HeroService } from './hero.service';
import { HeroController } from './hero.controller';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [HeroController],
  providers: [HeroService],
})
export class HeroModule {}
