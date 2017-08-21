import { Component } from '@angular/core';
import { Skill } from 'app/classes/skill.class';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'about-component',
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

      <div class="row justify-content-center no-gutters mt-3">
        <div class="col-sm-8 no-gutters">
          <h3 class="orange">What you should know about me</h3>
          <div class="row justify-content-center no-gutters">
            <div class="col col-6">
              <ul class="list-unstyled sub gray">
                <li class="mt-3">
                  <span class="fa fa-coffee orange"></span> I <i>love</i> <span class="orange">coffee</span>.
                  I'd marry it if it were a person.
                </li>
                <li class="mt-3"><span class="fa fa-globe orange"></span> Ask me about my love for
                  <span class="orange">traveling</span> if you feel like sitting down and listening for a couple of
                  hours.
                </li>
                <li class="mt-3"><span class="fa fa-paw orange"></span> I love our two senior <span class="orange">cats</span>
                  , Lotje and Lucifer.
                </li>
              </ul>
            </div>
            <div class="col col-6">
              <ul class="list-unstyled sub gray">
                <li class="mt-3"><span class="fa fa-cutlery orange"></span> The <span class="orange">kitchen</span> holds few
                  secrets for me.
                </li>
                <li class="mt-3"><span class="fa fa-hand-spock-o orange"></span> I'm a total <span class="orange">nerd</span>
                  and <span class="orange">sci-fi</span> fan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
    <div class="container mt-3 mb-5">
      <div class="row justify-content-center no-gutters">
        <div class="col-sm-8 no-gutters">
          <h1 class="orange">Skills and techniques</h1>
          <p class="sub gray">
            I started working with front-end technologies when I was fourteen. Over the years I have gathered a lot of
            experience in very <span class="orange">broad subjects</span> ranging from infrastructure to development as 
            well as setting up and maintaining Linux servers. I consider myself a real
            <span class="orange">adaptive 'allrounder'</span> that thrives in almost every environment and is more than
            capable of handling stressful situations. I can work closely with back-end engineers and designers as a sole
            front-ender as well as in an <span class="orange">Agile team</span>.
          </p>
          
          <h3 class="orange mt-5">Front-end</h3>
          <p class="sub gray">
            Over the years, I have started to specialize in front-end technologies ranging from jQuery to Angular.\r\n
            My passion lies in creating <span class="orange">beautiful interfaces</span> that still manage to be both
            <span class="orange">intuitive</span> as well as <span class="orange">surprising</span>.
          </p>
          <div class="row justify-content-start">
            <div *ngFor="let skill of feSkills" 
                 class="col col-2 skill text-center">
              <img src="{{skill.logoUrl}}" />
              <span class="">{{skill.name}}</span>
            </div>
          </div>
          <div class="row justify-content-start mt-3">
            <div *ngFor="let skill of fefwSkills"
                 class="col col-2 skill text-center">
              <img src="{{skill.logoUrl}}" />
              <span class="">{{skill.name}}</span>
            </div>
          </div>
          
          <h3 class="orange mt-5">Back-end</h3>
          <p class="sub gray">
            Although I specialized in front-end development, I think <i>any</i> webdeveloper should be able to create
            and setup a <span class="orange">complete webservice</span> from start to finish. Not including the numerous
            RESTful API's I have created for my own private projects, I have worked on numerous back-end projects such
            as Adésys' <i>'Livind'</i> and Rabobank's <i>'Mobiel bankieren app'</i>
          </p>
          <div class="row justify-content-start">
            <div *ngFor="let skill of beSkills"
                 class="col col-2 skill text-center">
              <img src="{{skill.logoUrl}}" />
              <span class="">{{skill.name}}</span>
            </div>
          </div>
          <div class="row justify-content-start mt-3">
            <div *ngFor="let skill of befwSkills"
                 class="col col-2 skill text-center">
              <img src="{{skill.logoUrl}}" />
              <span class="">{{skill.name}}</span>
            </div>
          </div>

          <h3 class="orange mt-5">Database</h3>
          <p class="sub gray">
            I have extensive experience designing, creating and maintaining databases in both MySQL and Oracle. The most
            recent instances being Damco's <i>'project Frida'</i> and Rabobank's <i>'Mobiel bankieren app'</i>.
          </p>
          <div class="row justify-content-start">
            <div *ngFor="let skill of dbSkills"
                 class="col col-2 skill text-center">
              <img src="{{skill.logoUrl}}" />
              <span class="">{{skill.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .main-title{
      margin-top: 20vh;
    }
    .main-title .jumbo span:last-child{
      margin-left: -25px;
    }
    .skill img{
      width: 100%;
    }
    .skill{
      transition-duration: 0.5s;
      /* Firefox 10+, Firefox on Android */
      filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");

      /* IE 6-9 */
      filter: gray;

      /*
      Chrome 19+,
      Safari 6+,
      Safari 6+ iOS,
      Opera 15+
      */
      -webkit-filter: grayscale(100%);
      color: #bdbdbd;
    }
    
    .skill:hover{
      color: #ffab40;
      filter: grayscale(0%);
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

export class AboutComponent {
  dob = '01-02-1990';
  skills: Skill[] = [];
  feSkills: Skill[] = [];
  fefwSkills: Skill[] = [];
  beSkills: Skill[] = [];
  befwSkills: Skill[] = [];
  dbSkills: Skill[] = [];

  constructor(private skillService: SkillService) {
    this.skillService
      .getSkills()
      .subscribe((data: Skill[]) => {
        this.skills = data;
        this.filterSkills();
      });
  }

  private filterSkills() {
    for (const skill of this.skills) {
      switch (skill.type) {
        case 'fe':
          this.feSkills.push(skill);
          break;
        case 'fefw':
          this.fefwSkills.push(skill);
          break;
        case 'be':
          this.beSkills.push(skill);
          break;
        case 'befw':
          this.befwSkills.push(skill);
          break;
        case 'db':
          this.dbSkills.push(skill);
          break;
      }
    }
  }
}
