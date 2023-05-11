import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core'

describe('AppComponent', () => {
  
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent,
        ToolbarComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have a <router-outlet></router-outlet>', () => {
    const elem: HTMLElement = fixture.nativeElement.querySelector('router-outlet')
    expect(elem).toBeTruthy();
  });

  it('should have a link to a page', () => {
    const elem: HTMLElement = fixture.nativeElement.querySelector('router-outlet')
    expect(elem).toBeTruthy();
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('ngContent app is running!');
  // });
});
