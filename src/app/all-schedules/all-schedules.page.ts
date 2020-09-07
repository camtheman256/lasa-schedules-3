import { Component, OnInit } from '@angular/core';
import { SchedulesService } from '../schedules.service';
import { Schedule } from '../schedule';
import { StateService } from '../state.service';
import { first } from "rxjs/operators";

@Component({
  selector: 'app-all-schedules',
  templateUrl: './all-schedules.page.html',
  styleUrls: ['./all-schedules.page.scss'],
})
export class AllSchedulesPage implements OnInit {
  allSchedules: Schedule[];
  schedPicker: string;
  preferences: object;

  constructor(
    private sched: SchedulesService,
    private state: StateService
  ) { }

  ngOnInit() {
    this.sched.getSchedules().subscribe(sched => {
      this.allSchedules = sched;
      if(!this.schedPicker) {
        this.schedPicker = sched[0].name;
      }
    });
    this.state.getPreferences().subscribe(pref => this.preferences = pref);
    this.state.getCurrentSchedule().pipe(first()).subscribe(sched => {
      if(sched) {
        this.schedPicker = sched.name;
      }
    });
  }

}
