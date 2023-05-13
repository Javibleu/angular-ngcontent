import { Injectable } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Observable, delay, of } from "rxjs";


interface RaceModel {
    name: string;
}


@Injectable({
    providedIn: 'root'
})
export class RaceService {
    list(): RaceModel[] {
        const race1: RaceModel = { name: 'London' };
        const race2: RaceModel = { name: 'Lyon' };
        return [race1, race2];
    }

    asyncList(): Observable<RaceModel[]>{
        const race1: RaceModel = { name: 'London' };
        const race2: RaceModel = { name: 'Lyon' };
        const races = of([race1, race2]);
        return races.pipe(delay(10))
    }
}


describe('RaceService Test', ()=>{

    it('should return 2 races when list() is called', ()=>{
        const raceService = new RaceService();
        const res = raceService.list();
        expect(res.length).toBe(2)
    })
})

describe('Raceservice with TestBed.inject()', ()=>{
    it('should return 2 races when list() is called', ()=>{
        const raceService = TestBed.inject(RaceService);
        const res = raceService.list();
        expect(res.length).toBe(2)
    })
});