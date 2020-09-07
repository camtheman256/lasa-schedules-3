import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllSchedulesPage } from './all-schedules.page';

const routes: Routes = [
  {
    path: '',
    component: AllSchedulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllSchedulesPageRoutingModule {}
