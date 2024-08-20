import { Routes } from '@angular/router';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { AddNoteComponent } from './pages/add-note/add-note.component';
import { UnknownComponent } from './pages/unknown/unknown.component';
import { NoteDetailComponent } from './pages/notes-list/note-detail/note-detail.component';

export const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: NotesListComponent
			},
			{
				path: 'home',
				component: NotesListComponent
			},
			{
				path: 'note/:id',
				component: NoteDetailComponent
			}
		]
	},
	{
		path: 'new',
		component: AddNoteComponent
	},
	{
		path: '**',
		component: UnknownComponent
	}
];
