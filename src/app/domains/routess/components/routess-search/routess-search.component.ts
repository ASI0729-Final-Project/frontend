import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-routess-search',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule
  ],
  templateUrl: './routess-search.component.html',
  styleUrls: ['./routess-search.component.css']
})
export class RoutessSearchComponent {
  from: string = '';
  to: string = '';
  date: string = '';
  time: string = '';
  price: number = 0.0;
  seat: number = 0;


  @Output() search = new EventEmitter<{from: string; to: string, date: string; time: string, price: number, seat: number }>();

  onSearch() {
    console.log('VALORES:', this.price, this.seat);
    this.search.emit({
      from: this.from.trim().toLowerCase(),
      to: this.to.trim().toLowerCase(),
      date: this.date,
      time: this.time,
      price: this.price,
      seat: this.seat
    });
  }

}



