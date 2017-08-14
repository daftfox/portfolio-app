import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'years-since-date',
  template: `<ng-template>{{output}}</ng-template>`
})

export class YearsSinceDateComponent implements OnInit {
  @Input() date: string;
  output: string;

  ngOnInit() {
    this.output = moment(this.date, 'DD-MM-YYYY').startOf('year').to(moment(new Date()).startOf('year'), true);
  }
}
