import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllSchedulesPageRoutingModule } from './all-schedules-routing.module';

import { AllSchedulesPage } from './all-schedules.page';
import { TimeFormatPipe } from '../time-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllSchedulesPageRoutingModule
  ],
  declarations: [AllSchedulesPage, TimeFormatPipe]
})
export class AllSchedulesPageModule {}
