import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentSchedulePageRoutingModule } from './current-schedule-routing.module';

import { CurrentSchedulePage } from './current-schedule.page';
import { TimeFormatPipe } from '../time-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentSchedulePageRoutingModule,
  ],
  declarations: [CurrentSchedulePage, TimeFormatPipe]
})
export class CurrentSchedulePageModule {}
