import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from 'src/dtos/create-notetaking.dto';
import { Notes } from './notetaking.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class NoteTakingService {
  private notes: Notes[] = [];
  getNotes(): Notes[] {
    return this.notes;
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
    };
    this.notes.push(newNote);
    return newNote;
  }
  deleteNote(id: string): void {
    const result = this.getNote(id);
    this.notes = this.notes.filter((note) => note.id !== result.id);
  }
  updateNote(id: string, notetitle: string, description: string): Notes {
    const note = this.getNote(id);
    note.notetitle = notetitle;
    note.description = description;
    return note;
  }
}
