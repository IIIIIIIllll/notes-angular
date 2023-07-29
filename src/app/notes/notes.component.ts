import { Component } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../models/note';
import { AddNoteModalComponent } from '../modals/add-note-modal/add-note-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  constructor(private noteService: NoteService, private dialog: MatDialog) {}
  
  addNewNote(): void {
    const dialogRef = this.dialog.open(AddNoteModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((newNote: Note) => {
      if (newNote) {
        this.noteService.addNote(newNote);
      }
    });
  }
}
