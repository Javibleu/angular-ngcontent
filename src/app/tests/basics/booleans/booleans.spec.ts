import { loggedUser } from "./booleans";


describe('Boolean Tests', ()=>{
    it('should return true', ()=>{
        const resp = loggedUser();
        expect(resp).toBeTruthy(); // toBeFalsy() to check falsy or .not.toBeTruthy();
    });
});