import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']

})
export class InputButtonUnitComponent implements OnInit {
  title: string = 'Hello World';
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }
  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
