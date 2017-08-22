import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Route, Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'navigation',
  styles: [
    `nav .row div{
      color: #bdbdbd;
      transition-duration: 0.5s;
      font-family: 'junction-light', sans-serif;
      font-size: 24px;
      cursor: pointer;
      pointer-events: all;
    }

    nav .row div.active{
      font-family: 'junction-bold', sans-serif;
    }

    nav .row div.hover:hover{
      color: #ffab40;
    }
      
    nav.container{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      height: 23vh;
      pointer-events: none;
    }
    
    .center-text{
      text-align: center;
    }
      
    .w100p{
      min-width: 100px;
    }
    .w50p{
      min-width: 50px;
    }
      
    hr{
      margin-top: 0!important;
      box-shadow: black 0 -2px 5px;
    }
    
    .social{
      margin: 10px 2px;
    }
    
    /*@media screen and (max-width: 576px){
      .menu-label{
        font-size: 18px!important;
      }
    }*/
    `
  ],
  template:
    `<nav class="container">
      <hr class="orange" />
      <div class="row justify-content-center no-gutters">
        <div *ngFor="let r of routes"
            [ngClass]="{'active': active}"
            routerLink="{{r.path}}"
            routerLinkActive="active"
            class="col col-4 gray center-text hover">
          {{r.path | capitalize}}
        </div>
        <div class="col col-4 center-text gray hidden-md-down">
          <a target="_blank"
             class="social"
             href="https://www.linkedin.com/in/tim-claassens/">
            <span class="fa fa-linkedin"></span>
          </a>
          <a target="_blank"
             class="social"
             href="https://www.linkedin.com/in/tim-claassens/">
            <span class="fa fa-instagram"></span>
          </a>
        </div>
      </div>
    <div class="row justify-content-center no-gutters hidden-md-up">
      <div class="col col-4 center-text gray">
        <a target="_blank"
           class="social"
           href="https://www.linkedin.com/in/tim-claassens/">
          <span class="fa fa-linkedin"></span>
        </a>
        <a target="_blank"
           class="social"
           href="https://www.instagram.com/bakakitsune/">
          <span class="fa fa-instagram"></span>
        </a>
      </div>
    </div>
  </nav>
  `
})

export class NavigationComponent implements OnInit {
  routes: Route[] = [];
  route:  string;

  constructor ( private router:   Router,
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
      if (config[i].path &&
          config[i].path !== '**') {
        this.routes.push(config[i]);
      }
    }
  }
}
