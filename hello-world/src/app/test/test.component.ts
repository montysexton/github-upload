import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: '<div>Test Text for component</div>',
  styles: [`div {
    color: blue;
  }`]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
