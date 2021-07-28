import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { RowhighlightsDirective } from './rowhighlights.directive';
import { FindlistPipe } from './findlist.pipe';
import { DocumentTypesComponent } from './components/document-types.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FindlistPipe,
    BreadcrumbComponent,
    RowhighlightsDirective,
    DocumentTypesComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    SharedModule,
    
  ]
})
export class DocumentsModule { }
