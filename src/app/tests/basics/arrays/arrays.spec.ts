import { getRobots } from "./arrays"


describe('Array Tests', ()=>{
    it('should return 3 robots', ()=>{
        const res = getRobots();
        expect(res).toHaveSize(3);
    });

    it('should return titus & tititus', ()=>{
        const res = getRobots();
        expect(res).toContain('titus');
        expect(res).toContain('tititus');
    });

    it('should return titus & tititus', ()=>{
        const res = getRobots();
        expect(res).toContain('titus');
        expect(res).toContain('tititus');
    });

})