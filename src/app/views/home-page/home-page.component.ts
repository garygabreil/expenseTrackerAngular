import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  /* expenseForm variable declaration */
  expenseForm: FormGroup;

  constructor(private firebaseService: DatabaseService) {
    /* Expenese Form group  */
    this.expenseForm = new FormGroup({
      /* fields inside my Expense Forms */
      name: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      purpose: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getExpenseById();
  }

  /* add Expense (function )*/
  addExpense() {
    this.firebaseService
      .createExpenseInsideFirestoreDB(this.expenseForm.value)
      .then(
        (response) => {
          window.alert('expense created');
        },
        (rejected) => {
          alert('error' + rejected);
        }
      );

    this.expenseForm.reset();
  }

  /* get expenseById (function)*/
  getExpenseById() {
    this.firebaseService.getAllExpenseFromFirestoreDB().subscribe((res) => {
      const id = res.map((expense) => {
        return expense.payload.doc.id;
      });
    });
  }
}
