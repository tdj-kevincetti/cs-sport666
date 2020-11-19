import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../firebase.service'
import {Input} from '@angular/core'
import {Football} from '../football'
@Component({
  selector: 'app-upcomingtable',
  templateUrl: './upcomingtable.component.html',
  styleUrls: ['./upcomingtable.component.css']
})
export class UpcomingtableComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }
  @Input() football:Football;
  ngOnInit() {
  }

}