import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

export interface HistoryCard {
  driver: string;
  from: string;
  to: string;
  date: string;
  hour: string;
  pay: number;
  state: string;
}


@Component({
  selector: 'app-history-card',
  imports: [MatTableModule, CommonModule,MatIconModule],
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.css'
})
export class HistoryCardComponent {
  displayedColumns: string[] = ['driver', 'from', 'to', 'date', 'hour', 'pay'];
  @Input() driver!: string;
  @Input() from!: string;
  @Input() to!: string;
  @Input() date!: string;
  @Input() hour!: string;
  @Input() pay!: number;
  @Input() state!: string;

  @Input() dataSource: HistoryCard[] = [];

 
}
