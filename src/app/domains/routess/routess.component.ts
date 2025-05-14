import { Component, OnInit } from '@angular/core';
import { RoutessSearchComponent } from './components/routess-search/routess-search.component';
import { RoutesCardComponent } from './components/routess-card/routess-card.component';
import { CommonModule } from '@angular/common';
import { RoutessService } from './services/routess.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-routess',
  standalone: true,
  imports: [
    RoutessSearchComponent,
    RoutesCardComponent,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './routess.component.html',
  styleUrls: ['./routess.component.css']
})
export class RoutesComponent implements OnInit {
  originalRoutess: any[] = [];
  routess: any[] = [];

  constructor(private routessService: RoutessService){}

  ngOnInit(): void {

    this.routessService.getRoutess().subscribe((data) => {
      this.originalRoutess = data;
      this.routess = data;
    })
  }

  onSearchFilter(criteria: { from: string , to: string, date: string; time: string; price: number; seat: number}){
    this.routess = this.originalRoutess.filter( (q) => {
      const origin = q.origin.toLowerCase();
      const destination = q.destination.toLowerCase();
      const matchesOrigin = origin.includes(criteria.from);
      const matchesDestination = destination.includes(criteria.to);
      const matchesDate = criteria.date ? q.date === criteria.date : true;
      const matchesTime = criteria.time ? q.time === criteria.time : true;
      const matchesPrice = criteria.price ? q.price == criteria.price : true;
      const matchesSeat = criteria.seat ? q.seats === criteria.seat : true;

      return (
        matchesOrigin &&
        matchesDestination &&
        matchesDate &&
        matchesTime &&
        matchesPrice &&
        matchesSeat
      );
    })
  }

}
