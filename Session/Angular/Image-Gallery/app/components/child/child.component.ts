import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input()
  childCount = 0;

  @Output()
  increemnt: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.childCount + ' Inside onchnages()..')
  }

  ngOnInit(): void {
  }
  @Input() childCount : number=0;
  
  @Output() increment: EventEmitter <number> = new EventEmitter();
  
  onClick(): void{
    this.increemnt.emit(++this.childCount);
  }

}
