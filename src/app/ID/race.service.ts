import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


@Injectable()
export class RaceService {

  constructor(private apiService: ApiService) { }

  list(): string[] {
    return this.apiService.get('/races')
  }

}
