import { Component, OnInit } from '@angular/core';
import { Passenger } from './passenger.interface';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {
  passengers: Passenger[] = [
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

  map_o = '../../assets/map-o.svg';

  constructor() {}

  ngOnInit() {}
}
