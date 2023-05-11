import { Player2 }from './player2'


describe('Event Emitter Test', ()=>{
    
    let player: Player2;

    beforeEach(()=>{
        player = new Player2();
    })

    it('should emit an event when is damaged', ()=>{
        
        let newHp=0;
        player.changeHp.subscribe( hp => newHp = hp )

        player.getDamaged(1000);
      
        expect(newHp).toBe( 0 );
    })
    
    it('should emit an event when is damaged and survive being 50', ()=>{
        
        let newHp=0;
        player.changeHp.subscribe( hp => newHp = hp ); // it is asyncronous but jasmine waits to be finished before continue

        player.getDamaged(50);
      
        expect(newHp).toBe( 50 );
    })

});