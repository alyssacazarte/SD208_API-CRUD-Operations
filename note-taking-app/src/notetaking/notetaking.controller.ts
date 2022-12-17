/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNoteDto } from 'src/dtos/create-notetaking.dto';
import { GetNotesFilterDto } from 'src/dtos/get-notetaking-filter.dto';
import { NotesStatusValidationPipe } from 'src/pipes/notes-status-validation.pipe';
import { Notes, NotesStatus } from './notetaking.model';
import { NoteTakingService } from './notetaking.service';

@Controller('notes')
export class NoteTakingController {
  constructor(private notetakingService: NoteTakingService) {}
  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getNotes() {
    return this.notetakingService.getNotes();
  }
  @Get(':id')
  getNote(@Param('id',ParseIntPipe) id: number) {
    return this.notetakingService.getNote(id);
  }
  
  @Post('create')
  @UsePipes(new ValidationPipe({ transform: true }))
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createNote(@Body() body: CreateNoteDto){
    return this.notetakingService.createNote(body);
  }
  @Delete(':id')
  deleteNote(@Param('id', ParseIntPipe) id: number): void {
    this.notetakingService.deleteNote(id);
  }
  @Patch(':id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', NotesStatusValidationPipe) status: NotesStatus
  ) {
    return this.notetakingService.updateNote(id, status);
  }
}
