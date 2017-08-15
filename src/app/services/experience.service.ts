import { Response, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Experience } from '../classes/experience.class';
import { ErrorService } from './error.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ExperienceService {
  private experiences: Experience[] = [];

  constructor(private _http: Http) {}

  private load(): Observable<Experience[]> {
    return this._http.get('./assets/json/experiences.json')
      .map((res: Response) => {
        return this.experiences = this.deserialize(res);
      })
      .catch((err) => {
        return ErrorService.error(err);
      });
  }

  private deserialize (res: Response): Experience[] {
    const data = res.json() || [];
    const serialized: Experience[] = [];
    data.forEach((d) => {
      serialized.push(new Experience(d));
    });
    return serialized;
  }

  public getExperiences(): Observable<Experience[]> {
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
