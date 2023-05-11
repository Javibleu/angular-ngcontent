import { Player } from "./classes";


describe('Classes Test', ()=>{

    let player: Player;

    beforeEach(()=>{
        player = new Player();
    })

    it('should return 80 hp if gets 20 of damage', ()=>{
        // const player = new Player();
        const resp = player.getDamaged(20);

        expect(resp).toBe(80); 
    })

    it('should return 2 hp if gets more than 100 of damage', ()=>{
        // const player = new Player();
        const resp = player.getDamaged(180);

        expect(resp).toBe(0); 
    })

});