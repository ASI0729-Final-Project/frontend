import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../../services/request.services';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatFormField} from '@angular/material/input';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {MatButton, MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-comments-popup',
  templateUrl: './comments-popup.component.html',
  imports: [
    MatIcon,
    DatePipe,
    MatFormField,
    FormsModule,
    MatFormField,
    CdkTextareaAutosize,
    NgForOf,
    MatButton,
    NgIf,
    MatIconButton
  ],
  styleUrls: ['./comments-popup.component.css']
})
export class CommentsPopupComponent {
  @Input() comments: Comment[] = [];
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<{text: string, rating: number}>();

  newComment = '';
  newRating = 0;

  setRating(rating: number) {
    this.newRating = rating;
  }

  submitComment() {
    if (this.newComment.trim()) {
      this.add.emit({
        text: this.newComment,
        rating: this.newRating
      });
      this.newComment = '';
      this.newRating = 0;
    }
  }
}
