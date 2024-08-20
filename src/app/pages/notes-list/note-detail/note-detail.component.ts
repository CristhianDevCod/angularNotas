import { Component, inject } from '@angular/core';
import { Note, NOTES } from '../../../../notes';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find( i => i.id === this.id);
}
