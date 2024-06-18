import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class EventCountdownComponent implements OnInit, OnDestroy {
  eventName: string = '';
  endDate: string = '';
  remainingTime: string = '';
  private intervalId: any;

  ngOnInit() {
    this.loadEvent();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  loadEvent() {
    this.eventName = localStorage.getItem('eventName') || '';
    const endDateString = localStorage.getItem('endDate');
    if (endDateString) {
      this.endDate = endDateString.split('T')[0];
    }
  }

  onInputChange() {
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

    endDate.setHours(23, 59, 59, 999);

    const duration = intervalToDuration({ start: now, end: endDate });

    if (endDate.getTime() < now.getTime()) {
      this.remainingTime = 'Event has passed';
      return;
    }

    this.remainingTime = this.formatDuration(duration);
  }

  formatDuration(duration: Duration): string {
    const days = duration.days ?? 0;
    const hours = duration.hours ?? 0;
    const minutes = duration.minutes ?? 0;
    const seconds = duration.seconds ?? 0;

    const totalDays = days + (duration.months ?? 0) * 30 + (duration.years ?? 0) * 365;

    const timeSegments: string[] = [];
    if (totalDays) timeSegments.push(`${totalDays} days`);
    if (hours) timeSegments.push(`${hours} h`);
    if (minutes) timeSegments.push(`${minutes} m`);
    if (seconds) timeSegments.push(`${seconds} s`);

    return timeSegments.join(', ');
  }
}
