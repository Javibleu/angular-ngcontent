
/**
 * We want to test the start() method, and see if it properly calls run(). So we spy on the run() method 
 * of all the ponies in the race:
 */

import { Pony } from "./no-injection.spec";


class Race {
    constructor(private ponies: Array<Pony>) { }
    
    start(): Pony[] {
        return (
            this.ponies.filter(pony => pony.run(10))
        );
    }
}


describe('Race', () => {
    let rainbowDash: Pony;
    let pinkiePie: Pony;
    let race: Race;

    beforeEach(() => {
        rainbowDash = new Pony('Rainbow Dash', 10);     // first pony agrees to run
        spyOn(rainbowDash, 'run').and.returnValue(true);
        
        pinkiePie = new Pony('Pinkie Pie', 8);          // second pony refuses to run
        spyOn(pinkiePie, 'run').and.returnValue(false);
        
        race = new Race([rainbowDash, pinkiePie]);      // create a race with these two ponies
    });

    it('should make the ponies run when it starts', () => {

        const runningPonies: Array<Pony> = race.start();    // start the race

        expect(pinkiePie.run).toHaveBeenCalled();           // create a race with these two ponies

        expect(rainbowDash.run).toHaveBeenCalledWith(10);   // with a speed of 10

        expect(runningPonies).toEqual([rainbowDash]);       // as one pony refused to start, the result should be an array of one pony
        });

});


