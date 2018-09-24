import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Passenger } from './models/passenger.interface';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  // PASSENGER_API = '/api/passengers';
  PASSENGER_API = 'http://localhost:3000/passengers';

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(this.PASSENGER_API)
      .pipe(map((response: Response) => response.json()));
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    // @QUESTION What should be the proper use of pipe + http provider?
    return this.http
      .put(`${this.PASSENGER_API}/${passenger.id}`, passenger)
      .pipe(map((response: Response) => response.json()));
  }
}
