import { HttpClient } from '@angular/common/http';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { EMPTY, Observable, from, throwError } from 'rxjs';


describe('MedicosComponent', () => {

    let component: MedicosComponent;
    let http!: HttpClient;
    const service = new MedicosService(http);

    beforeEach( () => {
        component = new MedicosComponent(service);
    });


    it('should load doctors', () => {
 
        const doctors = ['doctor1','doctor2','doctor3'];
        spyOn( service, 'getMedicos').and.callFake( ()=> {
            return from([doctors]);
        })
        
        component.ngOnInit();

        expect( component.medicos.length ).toBeGreaterThan(0);
    });

    it('should call server to add doctor', () => {
 
        
        const spy = spyOn( service, 'agregarMedico').and.callFake( (doctor)=> {
            return EMPTY;
        })
        
        component.agregarMedico()
        
        expect( spy ).toHaveBeenCalled();
    });

    it('should add a new doctor to doctors array', () => {
        
        const doctor = { id: 12, name: 'John'};
        
        const spy = spyOn( service, 'agregarMedico').and.returnValue( 
            from([ doctor] )
        )
        
        component.agregarMedico()
        
        expect( component.medicos.length ).toBe(1);
        expect( component.medicos.indexOf( doctor )).toBeGreaterThanOrEqual(0)
    });

    it('if fails doctor addition should have an error', () => {
        
        const error = 'Unable to add doctor';

        const spy = spyOn( service, 'agregarMedico').and.returnValue( 
            // throwError( ()=> new Error(error))
            throwError(error) // fix new obserbable error
        )
        
        component.agregarMedico()
        
        expect( component.mensajeError).toBe(error);

    });

    it('should call server to delete doctor', () => {
        
        spyOn(window, 'confirm').and.returnValue(true); // to pass confirm dialog

        const spy = spyOn( service, 'borrarMedico').and.returnValue( EMPTY )
        
        component.borrarMedico('1')
        
        expect( spy ).toHaveBeenCalledWith('1');

    });

    it('should not call server to delete doctor', () => {
        
        spyOn(window, 'confirm').and.returnValue(false); // to deny confirm dialog

        const spy = spyOn( service, 'borrarMedico').and.returnValue( EMPTY )
        
        component.borrarMedico('1')
        
        expect( spy ).not.toHaveBeenCalledWith('1');

    });


});
