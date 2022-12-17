/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { NoteTakingModule } from './notetaking/notetaking.module';

@Module({
  imports: [
  TypeOrmModule.forRoot(typeOrmConfig),
  NoteTakingModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
