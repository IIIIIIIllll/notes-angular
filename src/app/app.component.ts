import { Component } from '@angular/core';
import { NotesComponent } from './notes/notes.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [NotesComponent]
})
export class AppComponent {
  title = 'test-todo-app';
}
