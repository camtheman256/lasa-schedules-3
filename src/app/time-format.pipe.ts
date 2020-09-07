import { Pipe, PipeTransform } from '@angular/core';
import { StateService } from "./state.service";

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {
  constructor(private state: StateService) {}

  transform(value: string, twentyfour: boolean): unknown {
    let out: string = "";
    if (!twentyfour && value) {
      let colon: number = value.indexOf(":");
      let hour: number = Number(value.substring(0, colon));
      out += String(hour > 12 ? (hour - 12) : hour);
      out += value.substring(colon);
      out += hour >= 12 ? "p" : "a";
      return out;
    }
    return value;
  }

}
