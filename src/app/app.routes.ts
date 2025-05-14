import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { QuotesComponent } from './domains/quotes/quotes.component';
import { HistoryComponent } from './domains/history/history.component';
import { ProfileVerificationComponent } from './domains/verification/profile-verification.component';

export const routes: Routes = [
    { path: '' , component: HomePageComponent },
    { path: 'quotes', component: QuotesComponent },
    { path: 'history', component: HistoryComponent },
    {path: 'profile-verification', component:ProfileVerificationComponent},
    { path: "**", redirectTo: '' }
]