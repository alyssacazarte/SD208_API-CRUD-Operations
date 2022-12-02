import { Module } from '@nestjs/common';
import { NoteTakingController } from './notetaking.controller';
import { NoteTakingService } from './notetaking.service';

@Module({
  controllers: [NoteTakingController],
  providers: [NoteTakingService],
})
export class NoteTakingModule {}
