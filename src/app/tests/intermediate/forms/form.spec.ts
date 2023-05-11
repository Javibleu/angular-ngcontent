import { FormBuilder } from "@angular/forms";
import { LoginForm } from "./form"



describe('Form Testing', ()=>{
    
    let component: LoginForm;

    beforeEach(()=>{
        component = new LoginForm(new FormBuilder());
    })
    
    it('should create a form with 2 fields', ()=>{

        expect( component.form.contains('email')).toBeTruthy();
        expect( component.form.contains('password')).toBeTruthy();
    });

    it('Email should be required', ()=>{
        const control = component.form.get('email');
        control?.setValue('');

        expect( control?.valid ).toBeFalsy();
    });

    it('Email should be a valid email ', ()=>{
        const control = component.form.get('email');
        control?.setValue('javi@gmail.com');

        expect( control?.valid ).toBeTruthy();
    });



})