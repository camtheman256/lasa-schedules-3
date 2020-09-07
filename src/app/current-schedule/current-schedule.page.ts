import { Component, OnInit } from '@angular/core';
import { SchedulesService } from '../schedules.service';
import { Schedule } from '../schedule';
import { SchoolYear } from '../school-year';
import { StateService } from '../state.service';
import { PeriodStatus } from '../period-status';

@Component({
  selector: 'app-current-schedule',
  templateUrl: './current-schedule.page.html',
  styleUrls: ['./current-schedule.page.scss'],
})
export class CurrentSchedulePage implements OnInit {
  schedules: Schedule[];
  schoolYear: SchoolYear;
  preferences: object;
  currentTime: string;
  currentStatus: PeriodStatus;

  constructor(
    private sched: SchedulesService,
    private state: StateService
  ) { }

  ngOnInit() {
    this.sched.getSchedules().subscribe(sched => this.schedules = sched);
    this.sched.getSchoolYear().subscribe(sy => this.schoolYear = sy);
    this.state.getPreferences().subscribe(pref => this.preferences = pref);

    setInterval(() => {
      let now = new Date();
      this.currentTime = now.toLocaleTimeString([], {hour12: false});
      if(this.schedules && this.schoolYear) {
        this.currentStatus = this.sched.periodCheck(now, this.schoolYear, this.schedules);
      }
    }, 500);
  }

  toggleTimeFormat(e: Event) {
    if(this.preferences) {
      this.state.setPreference("twentyfour", !this.preferences["twentyfour"]);
    }
  }

}
