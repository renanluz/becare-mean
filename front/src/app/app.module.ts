import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalAddComponent } from './hospital-add/hospital-add.component';
import { HospitalEditComponent } from './hospital-edit/hospital-edit.component';
import { HospitalGetComponent } from './hospital-get/hospital-get.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalAddComponent,
    HospitalEditComponent,
    HospitalGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
