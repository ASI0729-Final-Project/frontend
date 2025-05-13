import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CommentCardComponent } from '../../../../shared/components/comment-card/comment-card.component';
import { QuoteService } from '../../services/quote.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-driver-comments-dialog',
  imports: [CommonModule,MatIconModule, CommentCardComponent, FormsModule],
  templateUrl: './driver-comments-dialog.component.html',
  styleUrl: './driver-comments-dialog.component.css'
})
export class DriverCommentsDialogComponent implements OnInit{
  comments: any[] = [];
  filteredComments: any[] = [];
  selectedRating: string = '';

  constructor(
    private quoteService: QuoteService,
    private dialogRef: MatDialogRef<DriverCommentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(): void {
    this.quoteService.getComments().subscribe((data) => {
      this.comments = data;
      this.filteredComments = data;
    })
  }

  filterByRating() {
    if (this.selectedRating === '') {
      this.filteredComments = this.comments;
    } else {
      const selected = parseInt(this.selectedRating);
      this.filteredComments = this.comments.filter(c => c.rating === selected);
    }
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
