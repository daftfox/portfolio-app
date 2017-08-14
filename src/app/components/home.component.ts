import {Component} from '@angular/core';

@Component({
  selector: 'home-component',
  template:
    `<div class="container main-title">
      <div class="row justify-content-center no-gutters">
        <div class="col-sm-8 no-gutters">
        <span class="jumbo orange">
          <span class="bold">Timothy</span>
          <span class="light">.fyi</span>
        </span>
        </div>
      </div>
      <div class="row justify-content-center no-gutters">
        <div class="col-sm-8 no-gutters">
          <p class="sub gray">
            <img class="picture" src="../assets/img/timothy.jpg">
            Hi, I'm Timothy, a <years-since-date class="orange" [date]="dob"></years-since-date> old, Netherlands based professional
            nerd.
            Currently employed by <span class="orange">Ordina</span> and working for 
            <span class="orange">Rabobank</span> as <span class="orange">devops</span> on their mobile banking app.
          </p>
          <p class="sub gray">
            Tech-savvy since I was able to hold a screwdriver. Eager to <span class="orange">challenge</span> both 
            myself and others. Mostly self-taught, I don't limit myself to one area of expertise.
            I love to <span class="orange">travel</span> and experience all the good things this life has to offer.
            My <span class="orange">dream job</span> would allow me and my partner to do just that; living and working
            on the road.
          </p>
        </div>
      </div>
    </div>`,
  styles: [`
    .main-title{
      margin-top: 20vh;
    }
    .main-title .jumbo span:last-child{
      margin-left: -25px;
    }
    
    .picture{
      width: 35%;
      border-radius: 50%;
      float: right;
      margin: 10px;
    }

    @media screen and (max-width: 300px){
      .main-title .jumbo span:last-child{
        margin-left: -15px;
      }
    }

    @media screen and (max-width: 400px){
      .main-title .jumbo span:last-child{
        margin-left: -12px;
      }
    }

    @media screen and (min-width: 576px) and (max-width: 768px){
      .main-title .jumbo span:last-child{
        margin-left: -12px;
      }
    }

  `
  ]
})

export class HomeComponent {
  dob = '01-02-1990';
}
