import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { HistoryComponent } from './pages/history/history.component';

export const routes: Routes = [
    { path: '' , component: HomePageComponent },
    { path: 'quotes', component: QuotesComponent },
    { path: 'history', component: HistoryComponent },
    { path: "**", redirectTo: '' }
]