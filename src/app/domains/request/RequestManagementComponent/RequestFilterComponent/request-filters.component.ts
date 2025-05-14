import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-request-filters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './request-filters.component.html',
  styleUrls: ['./request-filters.component.css'] // Asegúrate de crear este archivo
})
export class RequestFiltersComponent {
  @Input() selectedType: string = 'All';
  @Output() selectedTypeChange = new EventEmitter<string>();
  @Input() selectedStatus: string = 'All';
  @Output() selectedStatusChange = new EventEmitter<string>();
  @Output() filterChange = new EventEmitter<void>();
  @Output() toggleComments = new EventEmitter<void>();

  filterOptions = ['All', 'Requests', 'Reschedules', 'Canceled'];
  statusOptions = ['All', 'Confirmed', 'Pending', 'Completed', 'Canceled'];

  onTypeChange(newType: string): void {
    this.selectedType = newType;
    this.selectedTypeChange.emit(newType);
    this.filterChange.emit();
  }

  onStatusChange(newStatus: string): void {
    this.selectedStatus = newStatus;
    this.selectedStatusChange.emit(newStatus);
    this.filterChange.emit();
  }
}
