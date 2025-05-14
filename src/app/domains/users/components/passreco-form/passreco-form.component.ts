import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-passreco-form',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    FormsModule, 
    NgIf,
    MatCardModule,
    TranslateModule
  ],
  templateUrl: './passreco-form.component.html',
  styleUrls: ['./passreco-form.component.css']
})
export class PassrecoFormComponent {
  newPassword = '';
  confirmPassword = '';
  successMessage = '';
  errorMessage = '';

  constructor(public translate: TranslateService) {}

  onSubmit(): void {
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'PASSWORD_MISMATCH';
      return;
    }
    
    // Aquí iría la lógica para actualizar la contraseña
    this.successMessage = 'PASSWORD_UPDATED';
    this.errorMessage = '';
  }
}