import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

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
        <p>{{content}}</p>
        <div class="row justify-content-center">
          <div *ngFor="let imageUrl of imageUrls" class="col">
            <img src="{{imageUrl}}" />
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
      max-height: 100px;
    }
    `
  ]
})

export class ModalComponent {
  @Input() logoUrl: string;
  @Input() title: string;
  @Input() content: string;
  @Input() imageUrls: string[];

  constructor(public activeModal: NgbActiveModal) {}
}
