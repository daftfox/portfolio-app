import { Response, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Demo} from "../classes/demo.class";

@Injectable()
export class DemoService {
  private experiences: Demo[] = [];

  constructor(private _http: Http) {}

  private load(): Observable<Demo[]> {
    return this._http.get('./assets/json/demos.json')
      .map((res: Response) => {
        return this.experiences = this.deserialize(res);
      })
      .catch((err) => {
        return ErrorService.error(err);
      });
  }

  private deserialize (res: Response): Demo[] {
    const data = res.json() || [];
    const serialized: Demo[] = [];
    data.forEach((d) => {
      serialized.push(new Demo(d));
    });
    return serialized;
  }

  public getDemos(): Observable<Demo[]> {
    if (this.experiences.length > 0) {
      return new Observable((observer) => {
        observer.next(this.experiences);
        observer.complete();
      });
    } else {
      return this.load();
    }
  }
}
