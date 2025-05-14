import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatSelectModule, MatOption } from '@angular/material/select';

@Component({
  standalone: true,
  selector: 'app-history-search',
  imports: [FormsModule, MatFormField,MatLabel, MatFormFieldModule, MatSelectModule, MatOption],
  templateUrl: './history-search.component.html',
  styleUrl: './history-search.component.css'
})
export class HistorySearchComponent {
  month:string= ' ';
  type:string= ' ';
  pay:string= ' ';
  @Output() search = new EventEmitter<{month: string}>();

  onSearch() {
    this.search.emit(
      { 
        month: this.month
      }
    );
  }

}
