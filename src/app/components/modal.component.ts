import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Project} from '../classes/project.class';

@Component({
  selector: 'modal',
  template: `
    <div>
      <div class="modal-header">
        <h4 class="modal-title">{{title}}</h4>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row justify-content-center">
          <img class="logo mb-4 mt-4" src="{{logoUrl}}" />
        </div>
        <p class="description">{{content}}</p>
        <p class="description" *ngIf="url">{{url}}</p>
        <div class="row justify-content-center">
          <div *ngFor="let imageUrl of imageUrls" class="col">
            <img src="{{imageUrl}}" />
          </div>
        </div>
        <div class="row justify-content-start">
          <div *ngFor="let project of projects"
               class="col col-6 project">
            <h3 class="orange">{{project.name}}</h3>
            <p class="description">{{project.description}}</p>
            <a *ngIf="project.siteUrl" target="_blank" class="orange" href="{{project.siteUrl}}">{{project.siteUrl}}</a>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
      </div>
    </div>
  `,
  styles: [
    `
    .modal-header,
    .modal-footer{
      border-color: #ffab40;
    }
    .close{
      color: #ffab40;
    }
    .logo{
      max-height: 150px;
    }
    .description{
      white-space: pre-wrap;
      font-size: 14px;
    }
    .project {
      font-size: 14px;
    }
    `
  ]
})

export class ModalComponent {
  @Input() logoUrl: string;
  @Input() title: string;
  @Input() content: string;
  @Input() imageUrls: string[];
  @Input() projects: Project[];

  constructor(public activeModal: NgbActiveModal) {}
}
