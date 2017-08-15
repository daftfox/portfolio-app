import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class ErrorService {
  static error(error) {
    return Observable.throw(new Error(error));
  }
}
