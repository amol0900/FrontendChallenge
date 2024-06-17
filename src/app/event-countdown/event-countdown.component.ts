import { Component, OnInit } from '@angular/core';
import { intervalToDuration, Duration } from 'date-fns';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FitTextDirective } from '../directives/fit-text.directive';

@Component({
  selector: 'app-event-countdown',
  standalone: true,
  templateUrl: './event-countdown.component.html',
  styleUrls: ['./event-countdown.component.scss'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    FitTextDirective,
  ]
})
export class EventCountdownComponent implements OnInit {
  eventName: string = '';
  endDate: string = '';
  remainingTime: string = '';

  ngOnInit() {
    this.loadEvent();
    setInterval(() => this.updateCountdown(), 1000);
  }

  loadEvent() {
    this.eventName = localStorage.getItem('eventName') || '';
    const endDateString = localStorage.getItem('endDate');
    if (endDateString) {
      this.endDate = endDateString.split('T')[0];
    }
  }

  saveEvent() {
    localStorage.setItem('eventName', this.eventName);
    localStorage.setItem('endDate', this.endDate);
    this.updateCountdown();
  }

  updateCountdown() {
    if (!this.endDate) {
      this.remainingTime = '';
      return;
    }

    const now = new Date();
    const endDate = new Date(this.endDate);
    endDate.setHours(0, 0, 0, 0);
    const duration = intervalToDuration({ start: now, end: endDate });

    if (endDate.getTime() < now.getTime()) {
      this.remainingTime = 'Event has passed';
      return;
    }

    this.remainingTime = this.formatDuration(duration);
  }

  formatDuration(duration: Duration): string {
    const parts: string[] = [];
    if (duration.days) parts.push(`${duration.days} days`);
    if (duration.hours) parts.push(`${duration.hours} h`);
    if (duration.minutes) parts.push(`${duration.minutes} m`);
    if (duration.seconds) parts.push(`${duration.seconds} s`);
    return parts.join(', ');
  }
}
