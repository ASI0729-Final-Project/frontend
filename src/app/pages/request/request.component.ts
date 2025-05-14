// request-management.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


interface Request {
  type: string;
  status: string;
  dateRange?: string;
  viewComments: boolean;
  trip: string;
  passenger: string;
  message: string;
  sentDate: string;
}

interface Comment {
  text: string;
  rating: number;
  author: string;
}

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {

  filterOptions = ['All', 'Requests', 'Reschedules', 'Canceled'];
  statusOptions = ['All', 'Confirmed', 'Pending', 'Completed', 'Canceled'];
  selectedType = 'All';
  selectedStatus = 'All';


  setNewRating(rating: number) {
    this.newRating = rating;
  }
  toggleCommentsPopup() {
    this.showCommentsPopup = !this.showCommentsPopup;
  }
  showCommentsPopup = false;
  newComment = '';
  newRating = 0;
  comments: Comment[] = [
    {

      text: 'I have reviewed and accepted this request',
      rating: 4,
      author: 'Ana Rios'
    },
    {
      text: 'Trip request created successfully',
      rating: 0,
      author: 'Tony Muñoz'
    },
    {
      text: 'I can take this trip, will arrive early',
      rating: 5,
      author: 'Andrea Lopez'
    }
  ];

  addComment() {
    if (this.newComment.trim()) {
      this.comments.unshift({
        text: this.newComment,
        rating: this.newRating,
        author: 'You'
      });
      this.newComment = '';
      this.newRating = 0;
    }
  }

  requests: Request[] = [
    {
      type: 'Requests',
      status: 'Confirmed',
      dateRange: '',
      viewComments: true,
      trip: 'UNI - 24/05 -13:30',
      passenger: 'Ana Rios',
      message: 'has sent a request, you can review and accept it if you are available for the trip.',
      sentDate: 'Sent on 03/03 at 5:45 PM'
    },
    {
      type: 'Requests',
      status: 'Rejected',
      dateRange: '',
      viewComments: false,
      trip: 'UNI - 24/05 -13:30 23 requests for the trip',
      passenger: 'Carlos Méndez',
      message: 'has sent a request, you can review and accept it if you are available for the trip.',
      sentDate: 'Sent on 03/03 at 6:30 PM'
    },
    {
      type: 'Requests',
      status: 'Pending',
      dateRange: '',
      viewComments: true,
      trip: 'UNI - 25/05 -09:15',
      passenger: 'María López',
      message: 'has sent a reschedule request for the trip.',
      sentDate: 'Sent on 04/03 at 10:30 AM'
    },
    {
      type: 'Reschedules',
      status: 'Completed',
      dateRange: '',
      viewComments: false,
      trip: 'UPC - 26/05 -16:45',
      passenger: 'Juan Pérez',
      message: 'has completed the trip successfully.',
      sentDate: 'Sent on 05/03 at 3:20 PM'
    },
    {
      type: 'Reschedules',
      status: 'Canceled',
      dateRange: '',
      viewComments: true,
      trip: 'UPC - 27/05 -11:00',
      passenger: 'Laura García',
      message: 'has canceled the trip request.',
      sentDate: 'Sent on 06/03 at 9:15 AM'
    },
    {
      type: 'Requests',
      status: 'Confirmed',
      dateRange: '',
      viewComments: false,
      trip: 'UPC - 28/05 -14:30',
      passenger: 'Pedro Sánchez',
      message: 'has sent a request, you can review and accept it if you are available for the trip.',
      sentDate: 'Sent on 07/03 at 2:45 PM'
    }
  ]
}
