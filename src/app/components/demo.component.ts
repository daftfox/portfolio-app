import { Component } from '@angular/core';
import { Experience } from '../classes/experience.class';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal.component';
import {DemoService} from "../services/demo.service";
import {Demo} from "../classes/demo.class";

@Component({
  selector: 'experience-component',
  styles: [
    `.demo{
      margin-top: 35px;
      padding: 10px;
      transition-duration: 0.5s;
      //filter: grayscale(100%);
      cursor: pointer;
    }

    .demo .logo-wrapper{
      height: 150px;
    }

    .demo img{
      max-width: 100%;
      vertical-align: middle;
    }

    .demo:hover{
      color: #ffab40;
      filter: grayscale(0%);
    }

    .demo .projects{
      margin-top: 20px;
    }

    .demo .caption{
      font-size: 20px;
    }
    @media screen and (max-width: 500px) {
      .demo .caption{
        font-size: 16px;
      }
      
      .demo li{
        font-size: 14px;
      }
    }
    `
  ],
  template:
    `<div class="container main">
      <div class="row justify-content-start">
        <div  *ngFor="let demo of demos"
              class="col col-6 col-lg-3">
          <div class="row demo justify-content-center gray"
               (click)="openModal(demo)">
            <div class="col-12">
              <img class="img-fluid" [src]="demo.logoUrl" />
              <div class="projects">
                <span class="caption">{{demo.name}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
})

export class DemoComponent {
  demos: Demo[];

  constructor ( private modalService: NgbModal,
                private demoService: DemoService) {
    this.demoService
      .getDemos()
      .subscribe((data: Demo[]) => {
        this.demos = data;
    });
  }

  openModal (demo: Demo) {
    const modalRef = this.modalService.open(ModalComponent, {size: 'lg'}).componentInstance;
    modalRef.title = demo.name;
    modalRef.content = demo.description;
    modalRef.logoUrl = demo.logoUrl;
    modalRef.imageUrls = demo.imageUrls;
    modalRef.url = demo.url;
  }
}
