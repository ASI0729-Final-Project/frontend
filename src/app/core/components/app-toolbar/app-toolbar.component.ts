import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { UsersService } from '../../../domains/users/services/users.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    NgIf,
    TranslateModule
  ],
  templateUrl: './app-toolbar.component.html',
  styleUrl: './app-toolbar.component.css'
})
export class AppToolbarComponent {
  user: any = null;
  userRole: string = '';

  constructor(
    private router: Router,
    private usersService: UsersService,
    public translate: TranslateService
  ) {
    this.user = this.usersService.getCurrentUser();
    this.userRole = this.user?.Rol || '';
  }

  get userName(): string {
    return this.user ? `${this.user.Name} ${this.user.LastName}` : '';
  }

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
    this.usersService.logout();
    this.router.navigate(['/login']);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}

