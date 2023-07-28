import { Component } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  constructor(private noteService: NoteService) {}
  
  add(title: string, text: string) {
    if(!title || !text) return;
    const newNote: Note = {
      title,
      text
    };
    this.noteService.addNote(newNote);
  }
}
