import { Component, OnInit } from '@angular/core';
import {Football} from '../football'
import { FirebaseService } from '../firebase.service'
@Component({
  selector: 'app-todaymatch',
  templateUrl: './todaymatch.component.html',
  styleUrls: ['./todaymatch.component.css']
})
export class TodaymatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //รอเขียนกรองวันที่ เวลา
}