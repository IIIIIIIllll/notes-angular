import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-notes-list',
    templateUrl: './notes-list.component.html',
    styleUrls: ['./notes-list.component.css'],
    standalone: true,
    imports: [NgFor]
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
