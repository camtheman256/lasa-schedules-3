import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Observable, from, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  preferences = new BehaviorSubject<object>({
    twentyfour: true
  });

  constructor(
    private db: Storage
  ) {
    db.get("app-preferences").then(pref => this.preferences.next(pref));
  }

  getPreferences(): Observable<object> {
    return this.preferences.asObservable();
  }

  setPreferences(next: object): any{
    this.preferences.next(next);
    this.db.set("app-preferences", this.preferences);
  }
}
