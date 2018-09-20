import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.css']
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  map_o = '../../assets/map-o.svg';

  ngOnInit() {
    this.passengers = [
      {
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: new Date().getTime(),
        children: null
      },
      {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        children: null
      },
      {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkInDate: new Date().getTime(),
        children: null
      }
    ];
  }
}
