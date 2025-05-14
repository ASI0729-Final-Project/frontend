import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UsersService } from '../../services/users.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule, TranslateModule, MatIconModule, MatButtonModule],
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user: any = null;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.user = this.usersService.getCurrentUser();
  }
}

