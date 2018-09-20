import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-test',
  templateUrl: './svg-test.component.html',
  styleUrls: ['./svg-test.component.css']
})
export class SvgTestComponent implements OnInit {
  protected map_o = '../../assets/map-o.svg';

  constructor() {}

  ngOnInit() {}
}
