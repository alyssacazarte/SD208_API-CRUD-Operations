/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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
  @Get(':id')
  getNote(@Param('id') id: string) {
    return this.notetakingService.getNote(id);
  }
  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getNotes(@Query(ValidationPipe)filterDto: GetNotesFilterDto) {
    return this.notetakingService.getNotes(filterDto);
  }
  @Post('create')
  @UsePipes(new ValidationPipe({ transform: true }))
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
    @Body('status', NotesStatusValidationPipe) status: NotesStatus
  ): Notes {
    return this.notetakingService.updateNote(id, status);
  }
}
