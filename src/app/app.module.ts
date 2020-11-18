import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './firebase.service';
import { NextmatchComponent } from './nextmatch/nextmatch.component';
import { TodayComponent } from './today/today.component';
import { YesterdayComponent } from './yesterday/yesterday.component';
import { ResultComponent } from './result/result.component';
import { from } from 'rxjs';
import { TableComponent } from './table/table.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path: "",component:ResultComponent},
    {path: "nextmatch",component:NextmatchComponent},
    {path: "today",component:TodayComponent},
    {path: "yesterday",component:YesterdayComponent}
  ]
    
  ) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, NextmatchComponent, TodayComponent, YesterdayComponent, ResultComponent, TableComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FirebaseService]
})
export class AppModule { }
