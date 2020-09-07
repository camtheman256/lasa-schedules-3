import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Observable, from, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  PREFERENCES_KEY = "app-preferences"
  preferences = new BehaviorSubject<object>({
    twentyfour: true
  });

  constructor(
    private db: Storage
  ) {
    db.get(this.PREFERENCES_KEY).then(pref => {
      if(pref) {
        this.preferences.next(pref);
      } else {
        db.set(this.PREFERENCES_KEY, this.preferences.getValue());
      }
    });
  }

  getPreferences(): Observable<object> {
    return this.preferences.asObservable();
  }

  setPreferences(next: object): void {
    this.db.set(this.PREFERENCES_KEY, this.preferences).then(() => this.preferences.next(next));
  }

  setPreference(key: string, value: any): void {
    let prefObject = this.preferences.getValue();
    prefObject[key] = value;
    this.db.set(this.PREFERENCES_KEY, prefObject).then(() => this.preferences.next(prefObject));
  }
}
