import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicosComponent } from './intermediate/spy/medicos.component';
import { DoctorComponent } from './intermediate2/doctor/doctor.component';
import { HttpClientModule } from '@angular/common/http';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';
import { IncrementComponent } from './intermediate2/increment/increment.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MedicosComponent,
    DoctorComponent,
    HospitalComponent,
    IncrementComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: []
})
export class TestsModule { }
