


export class Player{

    hp: number;

    constructor(){
        this.hp = 100;
    }

    getDamaged(damage: number){
        if(damage >= this.hp){
            this.hp = 0
        }else{
            this.hp -= damage; 
        }
        return this.hp;
    }
}