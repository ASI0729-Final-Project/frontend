import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-quote-search',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './quote-search.component.html',
  styleUrl: './quote-search.component.css'
})
export class QuoteSearchComponent {
  from: string = '';
  to: string = '';
  date: string = '';
  time: string = '';

  @Output() search = new EventEmitter<{from: string; to: string, date: string; time: string }>();

  onSearch() {
    this.search.emit(
      { 
        from: this.from.trim().toLowerCase(),
        to: this.to.trim().toLowerCase(),
        date: this.date,
        time: this.time
      }
    );
  }
}
