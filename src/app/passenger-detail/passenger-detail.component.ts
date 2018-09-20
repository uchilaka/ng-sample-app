import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../passenger/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css']
})
export class PassengerDetailComponent implements OnInit {
  @Input()
  item: Passenger;

  statusDefaultImg = '../../assets/status-filler.png';

  constructor() {}

  ngOnInit() {}
}