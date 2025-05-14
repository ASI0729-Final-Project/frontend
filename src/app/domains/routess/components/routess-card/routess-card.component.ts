import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-routes-card',
  standalone: true,
  templateUrl: './routess-card.component.html',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule
  ],
  styleUrls: ['./routess-card.component.css']
})
export class RoutesCardComponent {
  @Input() origin!: string;
  @Input() destination!: string;
  @Input() date!: string;
  @Input() time!: string;
  @Input() price!: number;
  @Input() seats!: number;

}
