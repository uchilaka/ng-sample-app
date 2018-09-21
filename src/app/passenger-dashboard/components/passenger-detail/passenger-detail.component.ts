import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  // @NOTE TSLint enforced naming convention for selector - it "screamed" when I changed the selector
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css']
})
export class PassengerDetailComponent implements OnInit {
  @Input()
  item: Passenger;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  editing = false;
  statusDefaultImg = '../../../../assets/status-filler.png';

  constructor() {}

  ngOnInit() {}

  onNameChange(value: string) {
    // console.log(`onNameChange: ${value}`);
    this.item.fullname = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.item);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    // Emitting the item we would like to remove
    this.remove.emit(this.item);
  }
}
