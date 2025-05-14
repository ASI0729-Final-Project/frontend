import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Request } from '../../services/request.services';
import {RequestCardComponent} from './RequestCardComponent/request-card.component';
import {NgForOf, SlicePipe} from '@angular/common';

@Component({
  selector: 'app-request-grid',
  templateUrl: './request-grid.component.html',
  imports: [
    RequestCardComponent,
    NgForOf,
    SlicePipe
  ],
  styleUrls: ['./request-grid.component.css']
})
export class RequestGridComponent {
  @Input() requests: Request[] = [];
}
