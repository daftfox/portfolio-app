import { Component } from '@angular/core';
import { Experience } from '../classes/experience.class';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal.component';
import {ExperienceService} from '../services/experience.service';

@Component({
  selector: 'experience-component',
  styles: [
    `.employer{
      margin-top: 35px;
      height: 250px;
      padding: 10px;
      transition-duration: 0.5s;
      filter: grayscale(100%);
      cursor: pointer;
    }

    .employer .logo-wrapper{
      height: 150px;
    }

    .employer img{
      max-width: 100%;
      vertical-align: middle;
    }

    .employer:hover{
      color: #ffab40;
      filter: grayscale(0%);
    }

    .employer .projects{
      margin-top: 20px;
    }

    .employer .caption{
      font-size: 20px;
    }
    @media screen and (max-width: 500px) {
      .employer .caption{
        font-size: 16px;
      }
      
      .employer li{
        font-size: 14px;
      }
    }
    `
  ],
  template:
    `<div class="container main">
      <div class="row justify-content-start">
        <div  *ngFor="let experience of experiences"
              class="col col-6 col-lg-3">
          <div class="row employer justify-content-center gray"
               (click)="openModal(experience)">
            <div class="col-12">
              <div class="center-image text-center">
                <img src="{{experience.logoUrl}}" />
              </div>
              <div class="projects">
                <span class="caption">{{experience.name}}</span>
                <ul class="list-unstyled bold">
                  <li class="light" *ngFor="let project of experience.projects">{{project.name}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>`
})

export class ExperienceComponent {
  experiences: Experience[];

  constructor ( private modalService: NgbModal,
                private experienceService: ExperienceService) {
    this.experienceService
      .getExperiences()
      .subscribe((data: Experience[]) => {
        this.experiences = data;
    });
  }

  openModal (experience: Experience) {
    const modalRef = this.modalService.open(ModalComponent, {size: 'lg'}).componentInstance;
    modalRef.title = experience.name;
    modalRef.content = experience.description;
    modalRef.logoUrl = experience.logoUrl;
    modalRef.projects = experience.projects;
  }
}
