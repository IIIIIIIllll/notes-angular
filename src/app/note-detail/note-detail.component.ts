import { Component } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../models/note';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
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
