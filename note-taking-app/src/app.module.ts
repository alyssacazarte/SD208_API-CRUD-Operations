import { Module } from '@nestjs/common';
import { NoteTakingModule } from './notetaking/notetaking.module';

@Module({
  imports: [NoteTakingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
