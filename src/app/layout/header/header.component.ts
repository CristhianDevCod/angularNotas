import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: `
    <h1 class="text-center bg-warning py-3 fw-bold m-0">{{title}}</h1>

    <nav class="bg-warning navbar navbar-expand-lg">
      <div class="container d-flex justify-content-center">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse align-items-center justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <button class="nav-link mx-auto" aria-current="page" routerLink="/home">Home</button>
            </li>
            <li class="nav-item mx-auto">
              <button class="nav-link" routerLink="/new">New Note</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'Mis Notas'
}
