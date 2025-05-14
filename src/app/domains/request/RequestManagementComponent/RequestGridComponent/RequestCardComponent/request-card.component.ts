import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Request } from '../../../services/request.services';
import {MatCard} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {NgIf} from '@angular/common';
import {MatIconButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  imports: [
    MatCard,
    MatIcon,
    NgIf,
    MatIconButton,
    MatTooltip,

  ],
  styleUrls: ['./request-card.component.css']
})
export class RequestCardComponent {
  @Input() request!: Request;
  @Output() showComments = new EventEmitter<number>();

  getStatusColor(status: string): string {
    switch(status) {
      case 'Confirmed': return '#4CAF50';
      case 'Pending': return '#FFC107';
      case 'Rejected': return '#F44336';
      case 'Completed': return '#2196F3';
      case 'Canceled': return '#9E9E9E';
      default: return '#607D8B';
    }
  }
}
