import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentSchedulePage } from './current-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentSchedulePageRoutingModule {}
