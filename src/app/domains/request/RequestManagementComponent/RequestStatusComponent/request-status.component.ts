import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatIcon} from '@angular/material/icon';
import {NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  imports: [
    MatProgressSpinner,
    MatIcon,
    NgIf,
    MatButton
  ],
  styleUrls: ['./request-status.component.css']
})
export class RequestStatusComponent {
  @Input() loading: boolean = false;
  @Input() error: boolean = false;
  @Input() usingFallbackData: boolean = false;
  @Input() errorMessage: string = '';
  @Input() apiUrl: string = '';
  @Input() selectedType: string = '';
  @Input() selectedStatus: string = '';
  @Output() reload = new EventEmitter<void>();
  @Output() clearFilters = new EventEmitter<void>();

  showDebugInfo = false;
  requests: any;
}
