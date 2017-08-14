import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'


@Injectable()
export class ConfigService {
  private particlesJsConfig = '';

  constructor(private _http: Http) {
  }

  public load() {
    return new Promise((resolve, reject) => {
      this._http.get('config/config.json')  // path of your config.json file
        .map(res => res.json())
        .subscribe(
          (data: any) => {
            this.particlesJsConfig = data;
            resolve(true);
          },
          err => console.log(err)
        );
    });
  }

  public getConfig() {
    return  this.particlesJsConfig;
  }
}
