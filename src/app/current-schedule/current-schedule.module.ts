import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentSchedulePageRoutingModule } from './current-schedule-routing.module';

import { CurrentSchedulePage } from './current-schedule.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentSchedulePageRoutingModule,
    PipesModule
  ],
  declarations: [CurrentSchedulePage]
})
export class CurrentSchedulePageModule {}
