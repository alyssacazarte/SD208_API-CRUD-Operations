/* eslint-disable prettier/prettier */
import { IsNotEmpty, Length } from 'class-validator';
/* eslint-disable prettier/prettier */
export class CreateNoteDto {
    @IsNotEmpty({message: 'The notes should have a note title'})
    @Length(3,255)
    notetitle: string;
    @IsNotEmpty()
    @Length(3,255)
    description: string;
  }