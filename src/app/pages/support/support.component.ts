import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
  imports: [MatCardModule, MatButtonModule,TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportComponent {
  longTextEmail:string = `You can also send us your questions or suggestions via email.`;
  longTextHeadphones:string = `Do you have questions about how to use ÑanGo? Access our FAQs or chat with a support agent.`;
  longTextPhone:string = `If you need urgent help, call our support number directly.`;
  longTextWarning:string = `Is something not working properly? Report it here so we can help you quickly.`;
}
