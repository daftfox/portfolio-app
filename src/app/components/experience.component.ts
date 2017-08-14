import { Component } from '@angular/core';
import { Experience } from '../classes/experience.class';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal.component';

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
    }`
  ],
  template:
    `<div class="container mt-5">
      <div class="row justify-content-center">

        <div  *ngFor="let employer of employers"
              class="col-3">
          <div class="row employer justify-content-center gray"
               (click)="openModal()">
            <div class="col-12">
              <div class="center-image text-center">
                <img src="{{employer.logoUrl}}" />
              </div>
              <div class="projects">
                <span class="caption">{{employer.name}}</span>
                <ul class="list-unstyled bold">
                  <li class="light" *ngFor="let project of employer.projects">{{project}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>`
})

export class ExperienceComponent {
  employers: Experience[] = [
    new Experience(1, 'Ordina', './assets/img/logo-ordina.png', ['KIT', 'Code and Comedy']),
    new Experience(2, 'Rabobank', './assets/img/logo-rabobank.png', ['Mobiel Bankieren App']),
    new Experience(3, 'Damco', './assets/img/logo-damco.png', ['Project \'Frida\'']),
    new Experience(4, 'Travel Light', './assets/img/logo-travel-light.png', ['Website']),
    new Experience(5, 'Triple', './assets/img/logo-triple.png', ['Achmea Even Tanken', 'Snipp-IT', 'Project \'Doutzen\'']),
    new Experience(6, 'Adésys', './assets/img/logo-adesys.png', ['Livind']),
    new Experience(7, 'OIS', './assets/img/logo-ois.png', ['SDS Medical'])
  ];

  constructor (private modalService: NgbModal) {

  }

  openModal () {
    const modalRef = this.modalService.open(ModalComponent, {size: 'lg'}).componentInstance;
    modalRef.title = 'test';
    modalRef.content = 'Pannekoek met spek';
  }
}
