import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { NOTES } from '../mock-notes';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = NOTES;
  private selectedNoteSubject = new BehaviorSubject<Note | null>(null);
  selectedNote$ = this.selectedNoteSubject.asObservable();


  constructor() { }

  getNotes(): Observable<Note[]> {
    return of(this.notes);
  }

  setSelectedNote(note: Note): void {
    this.selectedNoteSubject.next(note);
  }

  addNote(note: Note) {
    this.notes.push(note);
  }
}
