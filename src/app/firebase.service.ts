import { Injectable } from '@angular/core';
import { AngularFirestore } from"@angular/fire/firestore";
import * as firebase from "firebase/app";
import { Football } from "./football";


@Injectable()
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  getFootball(){
    let DocRef = this.firestore.collection<Football>("worldUSAs");
    return DocRef.valueChanges();
  }


}