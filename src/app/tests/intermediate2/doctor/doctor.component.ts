import { Component } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  doctors: any[] = [];
  
  constructor(public doctorService: DoctorService) {
    
  }


  greetDoctor(name:string){
    return `Hi ${name}!`;
  }

  getDoctors(){
    this.doctorService.getDoctors().subscribe({
      next: (med:any)=> this.doctors = med,
    })
  }

}
