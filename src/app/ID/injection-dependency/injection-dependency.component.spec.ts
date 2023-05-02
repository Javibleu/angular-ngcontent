import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionDependencyComponent } from './injection-dependency.component';

describe('InjectionDependencyComponent', () => {
  let component: InjectionDependencyComponent;
  let fixture: ComponentFixture<InjectionDependencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectionDependencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectionDependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
