import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashbaordComponent } from './components/dashbaord.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material-module';
import { FormsModule } from '@angular/forms';
import { DashBreadcomComponent } from './components/dash-breadcom/dash-breadcom.component';


@NgModule({
  declarations: [
    DashbaordComponent,
    DashBreadcomComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ]
})
export class DashboardModule { }
