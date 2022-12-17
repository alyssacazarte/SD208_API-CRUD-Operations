/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from 'src/dtos/create-notetaking.dto';
import { v4 as uuidv4 } from 'uuid';
import { GetNotesFilterDto } from 'src/dtos/get-notetaking-filter.dto';
import { statSync } from 'fs';
import { NotesStatus } from './notetaking.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Notes } from './notetaking.entity';
import { Repository } from 'typeorm';
import { StdioNull } from 'child_process';

@Injectable()
export class NoteTakingService {
    constructor(
      @InjectRepository(Notes) private notesRepository: Repository<Notes>
    ){}
 
     async getNotes(): Promise<Notes[]>{
      try{
        const result  = await this.notesRepository.find();
        return result;
      }catch(error){

      }
   
    }
  //   if(search){
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     notes = notes.filter(x => x.notetitle.includes(search) || x.description.includes(search));
  //   }
  //   return notes;
  // }
    async getNote(id: number): Promise<Notes>{
      try{
        const notes = await this.notesRepository.findOneBy({id});
        if(!notes){
          throw new NotFoundException("Notes not found.");
        }
        return notes;
      }catch(error){

      }
    }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createNote(note: CreateNoteDto): Promise<Notes> {
    try{
      const newNotes = this.notesRepository.create({
        ...note,
        status: NotesStatus.OPEN,
        createdDate: new Date()
      });
      const result = await this.notesRepository.save(newNotes);
      return result;
    }catch(error){

    }
   
  
  }
  async deleteNote(id: number): Promise<void> {
    try{
      const result = this.getNote(id);
      await this.notesRepository.delete({id});
    }catch(error){

    }
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  async updateNote(id: number, status: NotesStatus): Promise<{}>{
    try{
      const notes = this.getNote(id);
      const result = await this.notesRepository.update({id}, {status});
      return{
        message: "Successfully Updated"
      }
    }catch(error){

    }
   
  }
}
