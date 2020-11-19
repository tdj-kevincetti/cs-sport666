import { Component, OnInit } from '@angular/core';
import {Football} from '../football'
import { FirebaseService } from '../firebase.service'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}