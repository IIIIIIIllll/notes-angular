import { Injectable } from '@angular/core';
import { Note } from './models/note';
import { NOTES } from './mock-notes';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private selectedNoteSubject = new BehaviorSubject<Note | null>(null);
  selectedNote$ = this.selectedNoteSubject.asObservable();

  constructor() { }

  getNotes(): Observable<Note[]> {
    const notes = of(NOTES);
    return notes;
  }

  setSelectedNote(note: Note) {
    this.selectedNoteSubject.next(note);
  }

}
