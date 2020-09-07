import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  preferences = {
    twentyfour: true
  };

  constructor(
    private db: Storage
  ) {
    db.get("app-preferences").then(pref => this.preferences = pref);
  }

  getPreference(key: string): any {
    if(key in this.preferences) {
      return this.preferences[key];
    }
  }

  setPreference(key: string, value: any): any{
    this.preferences[key] = value;
    this.db.set("app-preferences", this.preferences);
  }
}
