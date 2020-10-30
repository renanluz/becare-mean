import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import { HospitalAddComponent } from './hospital-add/hospital-add.component';
import { HospitalEditComponent } from './hospital-edit/hospital-edit.component';
import { HospitalGetComponent } from './hospital-get/hospital-get.component';

const routes: Routes = [
  {
    path: 'hospital',
    component: HospitalGetComponent
  },
  {
    path: 'hospital/create',
    component: HospitalAddComponent
  },
  {
    path: 'hospital/edit/:id',
    component: HospitalEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
