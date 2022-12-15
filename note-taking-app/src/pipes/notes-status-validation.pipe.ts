/* eslint-disable prettier/prettier */
import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { NotesStatus } from "src/notetaking/notetaking.model";

export class NotesStatusValidationPipe implements PipeTransform{
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    transform(value: any, metadata: ArgumentMetadata){
        if(!this.isStatusValid(value)){
            throw new BadRequestException(`${value} is not a valid status`);
        }
        return value;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private isStatusValid(status: any){
        return Object.values(NotesStatus).includes(status.toUpperCase() as NotesStatus);

    }
    
}