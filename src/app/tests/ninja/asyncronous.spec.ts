import { TestBed, waitForAsync } from '@angular/core/testing';
import { RaceService } from './depencency-injection.spec';



fdescribe('RaceService', () => {
    let service: RaceService;
    
    beforeEach(() => (service = TestBed.inject(RaceService)));
    
    it('should return an observable of 2 races', waitForAsync(() => {
        service.asyncList().subscribe(races => {
            expect(races.length).toBe(2);
        });
    }));

});