import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { QuotesComponent } from './domains/quotes/quotes.component';
import { HistoryComponent } from './pages/history/history.component';
import { LoginFormComponent } from './domains/users/components/login-form/login-form.component';
import { RegisterFormComponent } from './domains/users/components/register-form/register-form.component';
import { PassrecoFormComponent } from './domains/users/components/passreco-form/passreco-form.component';
import { RequestComponent } from './domains/request/RequestManagementComponent/request.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'quotes', component: QuotesComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'request', component: RequestComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegisterFormComponent },
    { path: 'password-recovery', component: PassrecoFormComponent },
    { path: "**", redirectTo: '' }
];
