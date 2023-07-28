import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../models/note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  selectedNote?: Note;

  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  onSelect(note: Note): void {
    this.selectedNote = note;
    this.noteService.setSelectedNote(note);
  }

  getNotes() {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes)
  }
}
