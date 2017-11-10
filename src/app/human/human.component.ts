import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HumanComponent implements OnInit {
  @Input() oldPower:number;
  @Input() multiplier: number;
  @Input() type: string;
  constructor() { }
  
  ngOnInit() {
    console.log(this.oldPower);
    console.log(this.multiplier);
    console.log(this.power);
  }

}
