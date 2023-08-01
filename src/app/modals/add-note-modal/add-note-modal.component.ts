import { Component } from '@angular/core';
import { Note } from 'src/app/models/note';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-add-note-modal',
    templateUrl: './add-note-modal.component.html',
    styleUrls: ['./add-note-modal.component.css'],
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule]
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