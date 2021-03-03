import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
 

  @Output()
  increemnt: EventEmitter<number> = new EventEmitter();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.childCount + ' Inside onchnages()..')
  }
  ngOnInit(): void {
  }

  @Input() childCount :number=0;
  
  @Output() increment: EventEmitter <number> = new EventEmitter();

  onClick():void{
    this.increment.emit(++this.childCount);
  }
}
