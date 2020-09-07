import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllSchedulesPageRoutingModule } from './all-schedules-routing.module';

import { AllSchedulesPage } from './all-schedules.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllSchedulesPageRoutingModule,
    PipesModule
  ],
  declarations: [AllSchedulesPage]
})
export class AllSchedulesPageModule {}