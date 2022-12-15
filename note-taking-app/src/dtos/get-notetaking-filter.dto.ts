/* eslint-disable prettier/prettier */
import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { NotesStatus } from "src/notetaking/notetaking.model";

export class GetNotesFilterDto{
    @IsOptional()
    @IsIn(Object.values(NotesStatus))
    status: NotesStatus;
    @IsOptional()
    @IsNotEmpty()
    search: string;
}