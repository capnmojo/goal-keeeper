import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-banner',
  templateUrl: './person-banner.component.html',
  styleUrls: ['./person-banner.component.scss']
})
export class PersonBannerComponent implements OnInit {

  @Input()
  person: any;

  constructor() { }

  ngOnInit(): void {
  }

}
