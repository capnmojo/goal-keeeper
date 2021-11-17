import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonBannerComponent } from './person-banner.component';

describe('PersonBannerComponent', () => {
  let component: PersonBannerComponent;
  let fixture: ComponentFixture<PersonBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
