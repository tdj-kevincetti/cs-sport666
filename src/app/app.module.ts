import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './firebase.service';
import { NextmatchComponent } from './nextmatch/nextmatch.component';
import { TodayresultComponent } from './todayresult/todayresult.component';
import { YesterdayComponent } from './yesterday/yesterday.component';
import { ResultComponent } from './result/result.component';
import { TableComponent } from './table/table.component';
import { TodaymatchComponent } from './todaymatch/todaymatch.component';
import { TomorrowComponent } from './tomorrow/tomorrow.component';
import { UpcomingtableComponent } from './upcomingtable/upcomingtable.component';
import { LiveboardComponent } from './liveboard/liveboard.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path: "",component:TodayresultComponent},
    {path: "nextmatch",component:NextmatchComponent},
    {path: "yesterday",component:YesterdayComponent},
    {path: "todaymatch",component:TodaymatchComponent},
    {path: "tomorrow",component:TomorrowComponent},
    {path: "liveboard",component:LiveboardComponent}
  ]
    
  ) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, NextmatchComponent, TodayresultComponent, YesterdayComponent, ResultComponent, TableComponent, TodaymatchComponent, TomorrowComponent, UpcomingtableComponent, LiveboardComponent, CommentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FirebaseService]
})
export class AppModule { }
