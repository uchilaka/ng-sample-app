import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'app-passenger-dashboard',
  template: `
    <div class="app">
      <app-svg-test></app-svg-test>
      <h3>Airline Passengers</h3>
      <!-- @NOTE illustrating ngOnChanges -->
      <div *ngFor="let passenger of passengers;">
        {{ passenger.fullname }}
      </div>
      <ul class="passengers">
        <li *ngFor="let passenger of passengers; let i = index" class="passenger">
          <!-- @NOTE Input binding is square braces; Event binding is parenthesis -->
          <app-passenger-detail
              [item]="passenger"
              (edit)="handleEdit($event)"
              (remove)="handleRemove($event)"></app-passenger-detail>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./passenger-dashboard.component.css']
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  map_o = '../../../../assets/map-o.svg';

  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit() {
    this.passengers = this.passengerService.getPassengers();
  }

  handleRemove(ev: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== ev.id;
    });
  }

  handleEdit(ev: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === ev.id) {
        // Merge direction <-
        passenger = Object.assign({}, passenger, ev);
      }
      return passenger;
    });
    console.log(this.passengers);
  }
}
