import { Component, Input, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { default as goals } from '../../assets/goals.json';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-container-card',
  templateUrl: './container-card.component.html',
  styleUrls: ['./container-card.component.scss'],
})
export class ContainerCardComponent implements OnInit {
  @Input()
  category: any;

  @Input()
  person: any = {};

  header: any;

  goals: Goal[] = [];
  goalCollection = 'goals';

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.loadGoals();
  }

  async loadGoals() {
    const dbResponse = await this.databaseService.queryDb(this.goalCollection, {
      key: 'personId',
      operator: '==',
      value: this.person.personId,
    });
  }

  openGoalCard(goal: Goal) {}
}
