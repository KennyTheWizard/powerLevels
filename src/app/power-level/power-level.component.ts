import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-power-level',
  templateUrl: './power-level.component.html',
  styleUrls: ['./power-level.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PowerLevelComponent implements OnInit {
  powerLevel: number;
  constructor() { }

  ngOnInit() {
    this.powerLevel = 1;
  }

}
