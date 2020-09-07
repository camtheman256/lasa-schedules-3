import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllSchedulesPageRoutingModule } from './all-schedules-routing.module';

import { AllSchedulesPage } from './all-schedules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllSchedulesPageRoutingModule
  ],
  declarations: [AllSchedulesPage]
})
export class AllSchedulesPageModule {}
