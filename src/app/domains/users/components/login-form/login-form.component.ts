import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UsersService } from '../../services/users.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { PasswordResetDialogComponent } from '../password-reset-dialog/password-reset-dialog.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    TranslateModule
  ],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  form: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    public translate: TranslateService,
    private dialog: MatDialog
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    this.isLoading = true;
    this.errorMessage = '';

    const { email, password } = this.form.value;

    this.usersService.login(email, password).subscribe(success => {
      this.isLoading = false;
      if (success) {
        this.router.navigate(['/']);
      } else {
        this.errorMessage = 'INVALID_CREDENTIALS';
      }
    });
  }
  
  openResetDialog(): void {
  const emailControl = this.form.get('email');
  const email = emailControl?.value;

  if (email && emailControl?.valid) {
    this.dialog.open(PasswordResetDialogComponent, {
      data: { email },
      width: '400px'
    });

    // Aquí podrías hacer una llamada real al backend si quieres:
    // this.usersService.sendResetEmail(email).subscribe(...);
  } else {
    // Opcional: marcar el campo como "tocado" para que se muestre el error
    emailControl?.markAsTouched();
    this.errorMessage = 'REQUIRED_FIELD';
  }
}


}