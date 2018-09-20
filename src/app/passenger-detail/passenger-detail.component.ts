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
  editing = false;
  statusDefaultImg = '../../assets/status-filler.png';

  constructor() {}

  ngOnInit() {}

  onNameChange(value: string) {
    // console.log(`onNameChange: ${value}`);
    this.item.fullname = value;
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  onRemove() {}
}
