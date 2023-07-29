import { Component } from '@angular/core';
import { Note } from 'src/app/models/note';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-note-modal',
  templateUrl: './add-note-modal.component.html',
  styleUrls: ['./add-note-modal.component.css']
})
export class AddNoteModalComponent {
  title: string = '';
  text: string = '';

  constructor(public dialogRef: MatDialogRef<AddNoteModalComponent>) {}

  onAddNote(): void {
    if(!this.title || !this.text) return;
    const newNote: Note = {
      title: this.title,
      text: this.text,
    };
    this.dialogRef.close(newNote);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}