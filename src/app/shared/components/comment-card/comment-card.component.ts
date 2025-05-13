import { CommonModule } from '@angular/common';
import { Component , Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-comment-card',
  imports: [CommonModule, MatIconModule],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.css'
})
export class CommentCardComponent {
  @Input() name!: string;
  @Input() comment!: string;
  @Input() rating: number = 5;
}
