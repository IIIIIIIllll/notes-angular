import { Injectable } from '@angular/core';
import { Note } from './models/note';
import { NOTES } from './mock-notes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private selectedNote: Note | null = null;

  constructor() { }

  getNotes(): Observable<Note[]> {
    const notes = of(NOTES);
    return notes;
  }

  setSelectedNote(note: Note) {
    this.selectedNote = note;
  }
}
