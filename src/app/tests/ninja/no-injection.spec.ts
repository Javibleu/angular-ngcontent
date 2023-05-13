
export class Pony {
    constructor(public name: string, public speed: number) { }

    isFasterThan(speed: number): boolean {
        return this.speed > speed;
    }

    run(speed: number): boolean {
        const runs = Math.random() < 0.5;
        console.log(runs);
        return runs;
    }
}

describe('No injection class test', () => {
    
    let pony:Pony;

    beforeEach(()=>{
        pony = new Pony('Rainbow', 10)
    });
    
    it('name prop should match the name on constructor', () => {
        expect(pony.name).toBe('Rainbow');
    });
    
    it('speed should not be 8', () => {
        expect(pony.speed).not.toBe(8);
    });
    
    it('isFasterThan() should return true', () => {
        expect(pony.isFasterThan(8)).toBe(true);
    });
});