/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { NotesStatus } from "./notetaking.model";

@Entity()
export class Notes extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    notetitle: string;
    @Column()
    description: string;
    @Column()
    status: NotesStatus;
    @Column()
    createdDate: Date;
}