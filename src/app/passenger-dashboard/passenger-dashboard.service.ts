import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Passenger } from './models/passenger.interface';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  PASSENGER_API = '/api/passengers';

  getPassengers(): Observable<Passenger[]> {
    return this.http.get(this.PASSENGER_API);
  }
}
