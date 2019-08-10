import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empcount',
  templateUrl: './empcount.component.html',
  styleUrls: ['./empcount.component.css']
})
export class EmpcountComponent {

  selected: string = 'All';
  
  @Input()
  all: number;
  @Input()
  male: number;
  @Input()
  female: number;

  @Output()
  selectChanged: EventEmitter<string> = new EventEmitter<string>();

  onSelectChange(): void {
    this.selectChanged.emit(this.selected);
  }
  
}
