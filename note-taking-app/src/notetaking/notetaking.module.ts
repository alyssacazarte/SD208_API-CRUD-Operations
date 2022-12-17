/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteTakingController } from './notetaking.controller';
import { Notes } from './notetaking.entity';
import { NoteTakingService } from './notetaking.service';

@Module({
  imports: [TypeOrmModule.forFeature([Notes])],
  controllers: [NoteTakingController],
  providers: [NoteTakingService],
})
export class NoteTakingModule {}
