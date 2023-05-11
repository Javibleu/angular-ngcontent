import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementComponent } from './increment.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementComponent;
    let fixture: ComponentFixture<IncrementComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementComponent);
        component = fixture.componentInstance;

    });

    it('should show legend', () => {

      component.leyenda= 'Loading progress';

      fixture.detectChanges(); // fires change detection

      const elem: HTMLElement = fixture.debugElement.query( By.css('h3')).nativeElement;  // => <h3> Loading progress - 50 </h3>

      expect(elem.innerHTML).toContain('Loading progress');

    });

    it( 'should show in input progress value' , async()=>{

        component.cambiarValor(5)

        fixture.detectChanges();

        fixture.whenStable().then( ()=>{
            
            const elem: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
            
            expect(elem.value).toBe('55');

        })
    });

});
