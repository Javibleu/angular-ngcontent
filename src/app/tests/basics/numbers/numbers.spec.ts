import { increment } from "./numbers"

describe('Number Test', ()=>{
    it('should return 100 if number is bigger than 100', ()=>{
        const res = increment(101);
        expect(res).toBe(100);
    });

    it('should return number plus 1', ()=>{
        const res = increment(10);
        expect(res).toBe(11);
    });



});