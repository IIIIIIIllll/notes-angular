import { Component } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note';
import { AddNoteModalComponent } from '../modals/add-note-modal/add-note-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { NoteDetailComponent } from '../note-detail/note-detail.component';
import { NotesListComponent } from '../notes-list/notes-list.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.css'],
    standalone: true,
    imports: [MatButtonModule, NotesListComponent, NoteDetailComponent]
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
