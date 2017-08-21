import { Response, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Skill } from '../classes/skill.class';
import { ErrorService } from './error.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SkillService {
  private skills: Skill[] = [];

  constructor(private _http: Http) {}

  private load(): Observable<Skill[]> {
    return this._http.get('./assets/json/skills.json')
      .map((res: Response) => {
        return this.skills = this.deserialize(res);
      })
      .catch((err) => {
        return ErrorService.error(err);
      });
  }

  private deserialize (res: Response): Skill[] {
    const data = res.json() || [];
    const serialized: Skill[] = [];
    data.forEach((d) => {
      serialized.push(new Skill(d));
    });
    return serialized;
  }

  public getSkills(): Observable<Skill[]> {
    if (this.skills.length > 0) {
      return new Observable((observer) => {
        observer.next(this.skills);
        observer.complete();
      });
    } else {
      return this.load();
    }
  }
}
