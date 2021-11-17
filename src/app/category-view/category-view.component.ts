import { Component, Input, OnInit } from '@angular/core';
import { default as people } from "../../assets/people.json"

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {

  @Input()
  category: any

  people: any

  constructor() { }

  ngOnInit(): void {
    this.people = people;
  }

}
