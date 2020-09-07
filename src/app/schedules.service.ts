import { Injectable } from '@angular/core';
import { SchedulesStatus } from './schedules-status';
import { Schedule } from './schedule';
import { SchoolYear } from './school-year';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  SCHEDULES_API = "https://schedules-data.lasa2019.com";

  constructor(private http: HttpClient) { }

  getSchedules(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.SCHEDULES_API + "/schedule.json");
  }

  getSchoolYear(): Observable<SchoolYear> {
    return this.http.get<SchoolYear>(this.SCHEDULES_API + "/school-year.json")
  }

  determineSchedule(day: Date, holidays: SchoolYear, schedules: Schedule[]): SchedulesStatus {
    // strip date of time information
    day = this.stripTime(day);
    let return_please: boolean = false;
    
    let currentStatus: SchedulesStatus = {
      currentSchedule: null
    };
    // check if the date is outside of the school year
    if(day < new Date(holidays["not_before"]) || day > new Date(holidays["not_after"])) {
      currentStatus.scheduleReason = "School not in session";
      if(day > new Date(holidays["not_after"])) {
        currentStatus.statusCode = -1;
        return currentStatus;
      }
      currentStatus.statusCode = 0
      return currentStatus;
    }
    // holiday checking
    holidays["holidays"].forEach(holiday => {
        if(this.dateApplies(day, holiday)) {
          currentStatus.scheduleReason = "School Holiday";
          return_please = true;
        }
    });
    if(return_please) {
      currentStatus.statusCode = 0;
      return currentStatus;
    }

    // special schedule checking
    for (let i = 0; i < schedules.length; i++) {
      if("dates" in schedules[i]) {
        schedules[i]["dates"].forEach(date => {
          if(this.dateApplies(day, date)) {
            currentStatus.currentSchedule = i;
            return_please = true;
          }
        });
      }
      if(return_please) {
        currentStatus.statusCode = 3;
        return currentStatus;
      };
      // Special day schedule checking
      if("applyDay" in schedules[i] && day.getDay() == schedules[i]["applyDay"]) {
        currentStatus.currentSchedule = i;
        currentStatus.statusCode = 2;
        return currentStatus;
      }
    }
    // weekend checking
    if(day.getDay() == 6 || day.getDay() == 0) {
      currentStatus.currentSchedule = null;
      currentStatus.scheduleReason = "Weekend";
      currentStatus.statusCode = 0;
      return currentStatus;
    }

    // otherwise, default to standard schedule
    currentStatus.currentSchedule = 0;
    currentStatus.statusCode = 1;
    return currentStatus;
  }

  dateApplies(test_date: Date, stored_date: string | Array<string>): boolean {
    // check if we have a date range
    if(stored_date instanceof Array) {
      return test_date >= new Date(stored_date[0]) && test_date <= new Date(stored_date[1]);
    }
    // otherwise just check if the dates are equal
    else {
      return test_date.getTime() === new Date(stored_date).getTime();
    }
  }

  stripTime(day: Date): Date {
    // strip date of time information, by setting all times to 0
    day = new Date(day.getTime());
    day.setHours(0);
    day.setMinutes(0);
    day.setSeconds(0);
    day.setMilliseconds(0);
    return day;
  }

  subtractTime(timeA: string, timeB: string): string {
    let timeArray: string[] = timeA.split(":");
    let timeBrray: string[] = timeB.split(":");
    let timeAsec: number = Number(timeArray[0])*3600 + Number(timeArray[1])*60 + Number(timeArray[2]);
    let timeBsec: number = Number(timeBrray[0])*3600 + Number(timeBrray[1])*60 + Number(timeBrray[2]);
    let subtracted: number = timeAsec - timeBsec;
    let outA = [Math.floor(subtracted/3600),Math.floor((subtracted % 3600)/60),subtracted % 60];
    let padA:string[] = [];
    outA.forEach((timeElement) => {
      let timeString = timeElement.toString();
      padA.push(timeString.length < 2 ? "0" + timeString : timeString);
    });
    return padA[0] + ":" + padA[1] + ":" + padA[2];
  }
  addTime(timeA: string, timeB: string):string {
    let timeArray: string[] = timeA.split(":");
    let timeBrray: string[] = timeB.split(":");
    let timeAsec: number = Number(timeArray[0])*3600 + Number(timeArray[1])*60 + Number(timeArray[2]);
    let timeBsec: number = Number(timeBrray[0])*3600 + Number(timeBrray[1])*60 + Number(timeBrray[2]);
    let added: number = timeAsec + timeBsec;
    let outA = [Math.floor(added/3600),Math.floor((added % 3600)/60),added % 60];
    let padA:string[] = [];
    outA.forEach((timeElement) => {
      let timeString = timeElement.toString();
      padA.push(timeString.length < 2 ? "0" + timeString : timeString);
    });
    return padA[0] + ":" + padA[1] + ":" + padA[2];
  }
}
