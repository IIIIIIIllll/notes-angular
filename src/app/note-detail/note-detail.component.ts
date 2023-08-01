import { Component } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-note-detail',
    templateUrl: './note-detail.component.html',
    styleUrls: ['./note-detail.component.css'],
    standalone: true,
    imports: [NgIf]
})
export class NoteDetailComponent {

  selectedNote?: Note | null;
  private selectedNoteSubscription: Subscription;

  constructor(private noteService: NoteService) {
    this.selectedNoteSubscription = this.noteService.selectedNote$
      .subscribe((note) => this.selectedNote = note)
  }

  ngOnDestroy() {
    this.selectedNoteSubscription.unsubscribe();
  }
}
