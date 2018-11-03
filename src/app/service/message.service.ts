import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Shoe } from '../classes/shoes';
@Injectable()
export class EmitService implements OnInit {
  public eventEmit: any;
  public shoesList: any;

  shoesArray: Shoe[] = [];
  constructor() {
    this.eventEmit = new EventEmitter();
  }

  ngOnInit() {
  }
}
