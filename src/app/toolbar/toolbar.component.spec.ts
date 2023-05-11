import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to page directives', () => {
    const elements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
  
    // // imperative way
    // let exist = false;
    // for(const elem of elements){
    //   if(elem.attributes['routerLink'] === 'di') exist = true
    // }

    const res = elements.some(x => x.attributes['routerLink'] === 'directives')
    
    expect(res).toBeTruthy();
  });
});
