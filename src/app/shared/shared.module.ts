import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';

import {RouterModule} from '@angular/router';




@NgModule({
  declarations: [
    NavMenuComponent,
    HeaderComponent,
    LayoutComponent,
    

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LayoutComponent
  ]

})
export class SharedModule { }
