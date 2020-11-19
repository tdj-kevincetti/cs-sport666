import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-liveboard',
  templateUrl: './liveboard.component.html',
  styleUrls: ['./liveboard.component.css']
})
export class LiveboardComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    msg: new FormControl('')
  })
  constructor() { }

  ngOnInit() {
  }

}