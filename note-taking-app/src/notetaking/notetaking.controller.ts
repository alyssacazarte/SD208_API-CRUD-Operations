import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateNoteDto } from 'src/dtos/create-notetaking.dto';
import { Notes } from './notetaking.model';
import { NoteTakingService } from './notetaking.service';

@Controller('notes')
export class NoteTakingController {
  constructor(private notetakingService: NoteTakingService) {}
  @Get(':id')
  getNote(@Param('id') id: string) {
    return this.notetakingService.getNote(id);
  }
  @Get()
  getNotes() {
    return this.notetakingService.getNotes();
  }
  @Post('create')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createNote(@Body() body: CreateNoteDto): Notes {
    return this.notetakingService.createNote(body);
  }
  @Delete(':id')
  deleteNote(@Param('id') id: string): void {
    this.notetakingService.deleteNote(id);
  }
  @Patch(':id')
  updateTask(
    @Param('id') id: string,
    @Body('notetitle') notetitle: string,
    @Body('description') description: string,
  ): Notes {
    return this.notetakingService.updateNote(id, notetitle, description);
  }
}
