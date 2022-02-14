import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BarChartModule, NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxChartsModule,
    BarChartModule,
  ]
})
export class DashboardModule { }
