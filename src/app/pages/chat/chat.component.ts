import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    NgFor,
    MatInputModule
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {
  trips = [
    {
      date: '24/05',
      time: '13:30',
      users: [
        { name: 'Junior Castillo', role: 'Driver' },
        { name: 'Rosario Rojas', role: 'Passenger(s)' },
        { name: 'Antonio Lopez', role: '' },
        { name: 'Enrique Ramirez', role: '' },
      ]
    },
    {
      date: '24/05',
      time: '13:30',
      users: [
        { name: 'Junior Castillo', role: 'Driver' },
        { name: 'Rosario Rojas', role: 'Passenger(s)' },
        { name: 'Antonio Lopez', role: '' },
        { name: 'Enrique Ramirez', role: '' },
      ]
    }
  ];

}
