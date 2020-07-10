import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  appInfo: BehaviorSubject<any>;
  public appInfoObserver: Observable<any>;

  constructor() {
    this.appInfo = new BehaviorSubject<any>(0);
    // this.appInfoObserver = this.appInfo.asObservable();
  }

  // public get appInfoObserverValue() {
  //   return this.appInfo.value;
  // }

  // public set appInfoObserverValue(value) {
  //   this.appInfo.next(value);
  // }
}
