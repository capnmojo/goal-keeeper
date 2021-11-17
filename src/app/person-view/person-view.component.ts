import { Component, Input, OnInit } from '@angular/core';
import { default as categories } from '../../assets/categories.json';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.scss'],
})
export class PersonViewComponent implements OnInit {
  constructor(private databaseService: DatabaseService) {}

  @Input()
  person: any;

  categories: any;
  categoriesCollection = 'categories';

  ngOnInit(): void {
    this.setup();
  }

  async setup() {
    const dbResponse = await this.databaseService.getAll(
      this.categoriesCollection
    );
    dbResponse.subscribe((d) => {
      this.categories = d;
      console.log(this.categories);
    });
  }
}
