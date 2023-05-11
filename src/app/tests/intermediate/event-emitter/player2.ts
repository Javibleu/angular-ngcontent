import { EventEmitter } from "@angular/core";


export class Player2{

    hp: number;
    changeHp= new EventEmitter<number>();

    constructor(){
        this.hp = 100;
    }

    getDamaged(damage: number){
        if(damage >= this.hp){
            this.hp = 0
        }else{
            this.hp -= damage; 
        }
        
        this.changeHp.emit( this.hp );
    }
}