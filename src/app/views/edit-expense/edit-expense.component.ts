import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/model/expense';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css'],
})
export class EditExpenseComponent implements OnInit {
  uniqueId: string;
  formInformation: any;

  //local variable
  name: string;
  type: string;
  amount: number;
  purpose: string;
  date: string;

  /* expenseForm variable declaration */
  expenseForm: FormGroup;

  constructor(
    private firebaseService: DatabaseService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.uniqueId = this.activatedRoute.snapshot.params['id'];
    this.firebaseService.getExpenseById(this.uniqueId).subscribe(
      (res: Expense) => {
        this.expenseForm = new FormGroup({
          /* fields inside my Expense Forms */
          name: new FormControl(res.name, Validators.required),
          amount: new FormControl(res.amount, Validators.required),
          type: new FormControl(res.type, Validators.required),
          date: new FormControl(res.date, Validators.required),
          purpose: new FormControl(res.purpose, Validators.required),
        });
      },
      (err) => {}
    );
  }

  ngOnInit(): void {
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

  //update expense function
  updateExpense() {
    this.firebaseService
      .updateExpenseByIdAndFormValues(this.uniqueId, this.expenseForm.value)
      .then((response) => {
        console.log('expense updated' + response);
        alert('expense updated successfully');
        this.router.navigateByUrl('/home');
      })
      .catch((err) => {
        console.log('error ' + err);
      });
  }
}
