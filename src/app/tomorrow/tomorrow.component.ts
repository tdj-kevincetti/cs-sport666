import { Component, OnInit } from '@angular/core';
import {Football} from '../football'
import { FirebaseService } from '../firebase.service'
import {Input} from '@angular/core'
@Component({
  selector: 'app-tomorrow',
  templateUrl: './tomorrow.component.html',
  styleUrls: ['./tomorrow.component.css']
})
export class TomorrowComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }
  @Input() football:Football;
  ngOnInit() {
    this.football = {
      ...this.football,
      date:this.football.date
    }
  }
  
}