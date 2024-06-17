import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventCountdownComponent } from './countdown/event-countdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, EventCountdownComponent]
})
export class AppComponent {
  title = 'FrontendChallenge';
}
