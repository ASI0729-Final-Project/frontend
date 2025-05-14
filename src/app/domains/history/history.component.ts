import { Component, OnInit } from '@angular/core';
import { HistoryService } from './services/history.service';
import { HistoryCardComponent } from './components/history-card/history-card.component';
import { HistorySearchComponent } from './components/history-search/history-search.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-history',
  standalone: true,
  imports: [HistoryCardComponent, HistorySearchComponent, CommonModule],
  providers: [HistoryService],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{
  originalHistory: any[] = [];
  history: any[] = [];
  constructor(private historyService: HistoryService){}
  ngOnInit(): void {
    this.historyService.getHistory().subscribe((data) => {
      console.log('Respuesta de la API:', data);
      this.originalHistory = data;
      this.history = data;
    })
  }

  onSearchFilter(criteria: { month: string}){
    this.history = this.originalHistory.filter( (h) => {
      const month = h.month.toLowerCase();
      const matchesMonth = month.includes(criteria.month);
  
      
      return matchesMonth;
    })
  }


}
