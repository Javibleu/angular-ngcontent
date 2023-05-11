import { message } from "./string";


describe('String Test', ()=>{
    it('should return a string', ()=>{
        const resp = message('Javier');
        expect(typeof resp).toBe('string')
    });

    it('should return a greeting with a name sent', ()=>{
        const name = 'Javier';
        const resp = message(name);
        expect(resp).toContain(name);
    });
});