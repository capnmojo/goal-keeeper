import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './services/database.service';
// import { default as people } from '../assets/people.json'
// import { default as categories } from '../assets/categories.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'goal-keeeper';
  person: any;
  category: any;
  peopleCollection: string = 'people';

  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
    this.setup();
  }

  async setup() {
    const people = await (
      await this.databaseService.getAll(this.peopleCollection)
    ).subscribe((response) => {
      console.log(response);
      this.person = response[0];
    });

    // this.category = categories[0];
  }
}
