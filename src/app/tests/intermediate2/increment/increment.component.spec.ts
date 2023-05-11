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

        const elem: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
        fixture.whenStable().then( ()=>{
            

            expect(elem.value).toBe('55');

        })
    });

    it('should increment/decrement on click event', ()=>{

        const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));

        buttons[0].triggerEventHandler('click', null) // push decrement, was 50
        expect( component.progreso).toBe(45)

        buttons[1].triggerEventHandler('click', null) // push increment, was 45
        expect( component.progreso).toBe(50)

    });

    it('should update value on input after increment click()', async()=>{

        const button = fixture.debugElement.query(By.css('button'));
        const element:HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        
        button.triggerEventHandler('click', null)
        fixture.detectChanges();

        expect(element.innerHTML).toContain('45');

    });

});
