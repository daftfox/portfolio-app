import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal',
  template: `
    <div>
      <div class="modal-header">
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">{{title}}</h4>
      </div>
      <div class="modal-body">
        <p>{{content}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
      </div>
    </div>
  `,
  styles: []
})

export class ModalComponent {
  @Input() title: string;
  @Input() content: string;

  constructor(public activeModal: NgbActiveModal) {}
}
