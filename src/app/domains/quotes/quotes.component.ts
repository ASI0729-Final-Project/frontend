import { Component, OnInit } from '@angular/core';
import { QuoteSearchComponent } from './components/quote-search/quote-search.component';
import { QuoteCardComponent } from './components/quote-card/quote-card.component';
import { CommonModule } from '@angular/common';
import { QuoteService } from './services/quote.service';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [
    QuoteSearchComponent,
    QuoteCardComponent,
    CommonModule
  ],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent implements OnInit {
  originalQuotees: any[] = [];
  quotes: any[] = [];

  constructor(private quoteService: QuoteService){}

  ngOnInit(): void {
    this.quoteService.getQuotes().subscribe((data) => {
      this.originalQuotees = data;
      this.quotes = data;
    })
  }

  onSearchFilter(criteria: { from: string , to: string, date: string; time: string}){
    this.quotes = this.originalQuotees.filter( (q) => {
      const origin = q.origin.toLowerCase();
      const destination = q.destination.toLowerCase();
      const matchesOrigin = origin.includes(criteria.from);
      const matchesDestination = destination.includes(criteria.to);
  
      const matchesDate = criteria.date ? q.date === criteria.date : true;
      const matchesTime = criteria.time ? q.time === criteria.time : true;
  
      return matchesOrigin && matchesDestination && matchesDate && matchesTime;
    })
  }
  
}
