import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2> 
    Welcome {{name}} 
  </h2>
<input [id]="myId" type="text" value = "The focused text value">
<input [disabled]="isDisabled" id="{{myId}}" type="text" value = "The second focused text value">

{{greeting}}

  `,
  styles: []
})
export class TestComponent implements OnInit {

    public name = "Codevolution";
    public greeting = '';
    public myId = 'testId';
    public isDisabled = false;

  constructor() { }

  ngOnInit() {
  }
}

