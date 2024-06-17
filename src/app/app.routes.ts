import { Routes } from '@angular/router';
import { EventCountdownComponent } from './countdown/event-countdown.component';

export const routes: Routes = [
  { path: '', redirectTo: '/event-form', pathMatch: 'full' },
  { path: '/event-countdown', component: EventCountdownComponent },
];
