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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register-form',
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
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    public translate: TranslateService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      profile: ['passenger', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value 
      ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const formData = this.form.value;
    const userData = {
      Name: formData.name,
      LastName: formData.lastName,
      Email: formData.email,
      Password: formData.password,
      Rol: formData.profile,
      // Agrega campos adicionales según necesites
      ...(formData.profile === 'student' && {
        University: 'Example University',
        StudentID: `STU${new Date().getFullYear()}${Math.floor(100 + Math.random() * 900)}`
      }),
      ...(formData.profile === 'driver' && {
        CarBrand: 'Unknown',
        LicensePlate: 'ABC123'
      }),
      Phone: '+1234567890' // Puedes agregar un campo para el teléfono en el formulario
    };

    this.usersService.register(userData).subscribe({
      next: (success) => {
        this.isLoading = false;
        if (success) {
          this.successMessage = 'REGISTRATION_SUCCESS';
          setTimeout(() => this.router.navigate(['/login']), 2000);
        } else {
          this.errorMessage = 'REGISTRATION_FAILED';
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = 'REGISTRATION_ERROR';
        console.error('Registration error:', err);
      }
    });
  }
}