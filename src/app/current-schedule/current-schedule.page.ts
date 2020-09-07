import { Component, OnInit } from '@angular/core';
import { SchedulesService } from '../schedules.service';
import { Schedule } from '../schedule';
import { SchoolYear } from '../school-year';
import { StateService } from '../state.service';
import { PeriodStatus } from '../period-status';
import { ModalController } from '@ionic/angular';
import { AboutPage } from '../about/about.page';

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
  bells: boolean = false;
  bell_sound = new Audio("assets/solemn.mp3");

  constructor(
    private sched: SchedulesService,
    private state: StateService,
    private modal: ModalController,
  ) { }

  ngOnInit() {
    this.sched.getSchedules().subscribe(sched => this.schedules = sched);
    this.sched.getSchoolYear().subscribe(sy => this.schoolYear = sy);
    this.state.getPreferences().subscribe(pref => {
      this.preferences = pref;
      this.bells = pref["bells"];
    });

    setInterval(() => {
      let now = new Date();
      this.currentTime = now.toLocaleTimeString([], {hour12: false});
      if(this.schedules && this.schoolYear) {
        let newStatus = this.sched.periodCheck(now, this.schoolYear, this.schedules);
        if(this.currentStatus && this.bells && newStatus.currentPeriod !== this.currentStatus.currentPeriod) {
          this.bell_sound.play();
        }
        this.currentStatus = newStatus;
      }
    }, 500);
  }

  toggleTimeFormat(e: Event) {
    if(this.preferences) {
      this.state.setPreference("twentyfour", !this.preferences["twentyfour"]);
    }
  }

  toggleBells(e: Event) {
    if(this.preferences) {
      this.state.setPreference("bells", this.bells);
    }
  }

  async presentAboutPage() {
    const modal = await this.modal.create({
      component: AboutPage
    });
    return await modal.present();
  }

  playBell(e: Event) {
    this.bell_sound.play();
  }

}
