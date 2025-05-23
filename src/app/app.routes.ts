import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { QuotesComponent } from './domains/quotes/quotes.component';
import { HistoryComponent } from './domains/history/history.component';
import { LoginFormComponent } from './domains/users/components/login-form/login-form.component';
import { RegisterFormComponent } from './domains/users/components/register-form/register-form.component';
import { PassrecoFormComponent } from './domains/users/components/passreco-form/passreco-form.component';
import { RequestComponent } from './domains/request/RequestManagementComponent/request.component';
import { MyProfileComponent } from './domains/users/pages/my-profile/my-profile.component';
import { ChangePasswordFormComponent } from './domains/users/components/change-password-form/change-password-form.component';
import { RoutesComponent } from './domains/routess/routess.component';
import { SupportComponent } from './pages/support/support.component';
import { ChatComponent } from './pages/chat/chat.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'quotes', component: QuotesComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'request', component: RequestComponent },
    { path: 'routess', component: RoutesComponent },
    { path: 'support', component: SupportComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegisterFormComponent },
    { path: 'password-recovery', component: PassrecoFormComponent },
    { path: 'profile', component: MyProfileComponent },
    { path: 'change-password', component: ChangePasswordFormComponent },
    { path: 'history', component: HistoryComponent},
    { path: "**", redirectTo: '' }
];
