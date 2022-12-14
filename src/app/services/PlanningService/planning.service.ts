import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../../message.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  public Url = 'http://localhost:3000/api/planning/';

  constructor(private httpClient: HttpClient, private messageService: MessageService) {
  }

  public extractData(res: any) {
    return res || {};
  }

  getPlanning(params?: string): Observable<any> {
    if (params) {
      return this.httpClient.get(this.Url + "?" + params).pipe(map(this.extractData));
    } else {
      return this.httpClient.get(this.Url).pipe(map(this.extractData));
    }
  }

  createPlanning(planningId: string, licensePlate: string, date: string): Observable<any> {

    const body = {
      "planningId": planningId,
      "licensePlate": licensePlate,
      "date": date
    };

    return this.httpClient.post(this.Url, body).pipe(map(this.extractData));
  }

  createValidPlanning(planningId: string, licensePlate: string, date: string): Observable<any> | null {
    if (!this.validateData(planningId, licensePlate, date)) return null;

    return this.createPlanning(planningId, licensePlate, date);
  }


  validateData(planningId: string, licensePlate: string, date: string): boolean {

    if (planningId == null) {
      this.log("ERROR: Planning Id can't be null.");
      return false;
    }

    if (licensePlate == null) {
      this.log("ERROR: Planning licensePlate can't be null.");
      return false;
    }

    if (date == null) {
      this.log("ERROR: Planning date can't be null.");
      return false;
    }

    return true;
  }

  log(message: string) {
    this.messageService.add(`Created: ${message}`);
  }
}
