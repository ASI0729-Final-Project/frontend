import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [MatButtonModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
