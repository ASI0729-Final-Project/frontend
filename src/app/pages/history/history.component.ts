import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
@Component({
  selector: 'app-history',
  imports: [
    NgIf
  ]
  ,
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  showPopup = false;
  openPopup(): void {
    this.showPopup = true;
    document.body.style.overflow = 'hidden';
  }
  closePopup(): void {
    this.showPopup = false;
    document.body.style.overflow = 'auto';
  }
}

