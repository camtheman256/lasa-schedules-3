import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'app',
    component: TabsPage,
    children: [
      {
        path: 'current-schedule',
        loadChildren: () => import('../current-schedule/current-schedule.module').then(m => m.CurrentSchedulePageModule)
      },
      {
        path: 'all-schedules',
        loadChildren: () => import('../all-schedules/all-schedules.module').then(m => m.AllSchedulesPageModule)
      },
      {
        path: '',
        redirectTo: '/app/current-schedule',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/current-schedule',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
