import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpensesPageComponent } from './list-expenses-page.component';

describe('ListExpensesPageComponent', () => {
  let component: ListExpensesPageComponent;
  let fixture: ComponentFixture<ListExpensesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExpensesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExpensesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
