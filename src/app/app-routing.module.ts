import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path:'dashboard',
    pathMatch:'full',
    loadChildren:()=> import('./components/dashbaord/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'documenttypes',
    pathMatch:'full',
    loadChildren:()=>import('./components/document-types/documents.module').then(m=>m.DocumentsModule)
  }
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
