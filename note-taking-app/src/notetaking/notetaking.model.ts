/* eslint-disable prettier/prettier */
export interface Notes {
  id: string,
  notetitle: string,
  description: string,
  status: NotesStatus,
}
export enum NotesStatus{
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}