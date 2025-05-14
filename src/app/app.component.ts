import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppToolbarComponent } from "./core/components/app-toolbar/app-toolbar.component";
import {FooterComponent} from './core/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppToolbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nango-frontend';
}
