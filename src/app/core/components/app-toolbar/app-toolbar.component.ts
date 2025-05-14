import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    NgIf
  ],
  templateUrl: './app-toolbar.component.html',
  styleUrl: './app-toolbar.component.css'
})
export class AppToolbarComponent {
  constructor(private router: Router, public translate: TranslateService) {}

  

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  changePassword() {
    this.router.navigate(['/change-password']);
  }

  support() {
    this.router.navigate(['/support']);
  }

  logout() {
    console.log('Logout');
    // Aquí iría la lógica real de logout
  }

  setLanguage(lang: string) {
    console.log('Cambiar idioma a:', lang);
    this.translate.use(lang);
  }
}
