import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReserveDialogComponent } from '../reserve-dialog/reserve-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DriverCommentsDialogComponent } from '../driver-comments-dialog/driver-comments-dialog.component';

import { TranslateModule } from '@ngx-translate/core'


@Component({
  selector: 'app-quote-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ReserveDialogComponent,
    TranslateModule
  ],
  templateUrl: './quote-card.component.html',
  styleUrl: './quote-card.component.css'
})
export class QuoteCardComponent {
  @Input() origin!: string;
  @Input() destination!: string;
  @Input() driverImage!: string;
  @Input() driver!: string;
  @Input() price!: number;
  @Input() date!: string;
  @Input() time!: string;
  @Input() seats!: number;
  @Input() licensePlate!: string;
  @Input() carBrand!: string;
  @Input() image!: string;

  constructor(private dialog: MatDialog){}

  openReserveDialog() {
    this.dialog.open(ReserveDialogComponent, {
      width: '800px',
      panelClass: 'custom-dialog-container',
      data: {
        origin: this.origin,
        destination: this.destination,
        date: this.date,
        time: this.time,
        price: this.price,
        driver: this.driver
      }
    });
  }

  openCommentsDialog(){
    this.dialog.open(DriverCommentsDialogComponent, {
      width: '600px',
      data: {
        driverName: this.driver,
        driverImage: this.driverImage,
        totalReviews: 23, 
        completedTrips: 5,
        averageRating: 5
    }
    })
  }
}
