import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorComponent } from './doctor.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DoctorService } from './doctor.service';

describe('DoctorComponent', () => {
  let component: DoctorComponent;
  let fixture: ComponentFixture<DoctorComponent>;

  beforeEach(async () => {
     TestBed.configureTestingModule({
      declarations: [ DoctorComponent ],
      providers: [ DoctorService ],
      imports: [HttpClientModule]
    })
    
    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Component', () => {
    expect(component).toBeTruthy();
  });

  it('should return greetings', () => {
    const name = 'Javier';

    const res = component.greetDoctor(name);

    expect(res).toContain(name);

  });
});
