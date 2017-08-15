import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Route, Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'navigation',
  styles: [
    `nav ul.list-inline li.list-inline-item{
      color: #bdbdbd;
      transition-duration: 0.5s;
      font-family: 'junction-light', sans-serif;
      font-size: 24px;
      cursor: pointer;
      margin: 0 25px;
      pointer-events: all;
    }

    nav ul.list-inline li.list-inline-item.active{
      font-family: 'junction-bold', sans-serif;
    }

    nav ul.list-inline li.list-inline-item:hover{
      color: #ffab40;
    }
      
    nav.container{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      height: 20vh;
      pointer-events: none;
    }
    
    .center-text{
      text-align: center;
    }
      
    .w100p{
      min-width: 100px;
    }
      
    hr{
      margin-top: 0!important;
      box-shadow: black 0 -2px 5px;
    }
    `
  ],
  template:
    `<nav class="container">
      <hr class="orange" />
      <div class="row justify-content-center no-gutters">
        <div class="col-md-auto no-gutters">
          <ul *ngIf="routes"
              class="list-inline gray">
            <li *ngFor="let r of routes"
                [ngClass]="{'active': active}"
                routerLink="{{r.path}}"
                routerLinkActive="active"
                class="list-inline-item">
              <div class="w100p center-text">{{r.path | capitalize}}</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
})

export class NavigationComponent implements OnInit {
  routes: Route[] = [];
  route: string;

  constructor ( private router: Router,
                private location: Location ) {
    router.events
      .filter(event => event instanceof NavigationEnd )
      .subscribe((val) => {
        if (location.path() !== '') {
          this.route = location.path().replace(/\//g, '');
        } else {
          this.route = 'home';
        }
    });
  }

  ngOnInit() {
    this.getRoutes(this.router.config);
  }

  getRoutes(config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      if (config[i].path) {
        this.routes.push(config[i]);
      }
    }
  }
}
