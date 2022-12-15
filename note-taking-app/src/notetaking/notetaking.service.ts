/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from 'src/dtos/create-notetaking.dto';
import { Notes, NotesStatus } from './notetaking.model';
import { v4 as uuidv4 } from 'uuid';
import { GetNotesFilterDto } from 'src/dtos/get-notetaking-filter.dto';
import { statSync } from 'fs';

@Injectable()
export class NoteTakingService {
  private notes: Notes[] = [];
  getNotes(filterDto: GetNotesFilterDto): Notes[] {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {status, search} = filterDto;
    let notes = this.notes;
    if(status){
      notes = notes.filter(x => x.status === status);
    }
    if(search){
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      notes = notes.filter(x => x.notetitle.includes(search) || x.description.includes(search));
    }
    return notes;
  }
  getNote(id: string): Notes {
    const note = this.notes.find((note) => note.id == id);

    if (!note) {
      throw new NotFoundException();
    }
    return note;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createNote(note: CreateNoteDto): Notes {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { notetitle, description } = note;
    const newNote: Notes = {
      id: uuidv4(),
      notetitle,
      description,
      status: NotesStatus.OPEN
    };
    this.notes.push(newNote);
    return newNote;
  }
  deleteNote(id: string): void {
    const result = this.getNote(id);
    this.notes = this.notes.filter((note) => note.id !== result.id);
  }
  updateNote(id: string, status: NotesStatus): Notes {
    const note = this.getNote(id);
    note.status = status;
    return note;
  }
}
