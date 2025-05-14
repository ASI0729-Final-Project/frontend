import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

@Component({
  standalone: true,
  selector: 'app-profile-verification',
  imports: [MatCard, FormsModule, MatFormField, MatLabel, MatRadioGroup, MatRadioButton, MatLabel, ReactiveFormsModule, MatInputModule],
  templateUrl: './profile-verification.component.html',
  styleUrl: './profile-verification.component.css'
})
export class ProfileVerificationComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [''],
      profileType: ['Estudent']
    });
  }
}