import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit, OnChanges {

  @Input()
  simpleInput: string;
  @Input()
  complexInput: string;

  constructor() { }

  ngOnInit() {
    console.log("Inside ng on init lifecycle hook");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    for(let prop in changes){
      if(prop == 'simpleInput')
      console.log("simpleInput: previous value=" + changes.simpleInput.previousValue + " current value=" + changes.simpleInput.currentValue);
      if(prop == 'complexInput')
      console.log("complexInput: previous value=" + changes.complexInput.previousValue + " current value=" + changes.complexInput.currentValue);
    }
  }

}
