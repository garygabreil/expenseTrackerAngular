import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatSnackBar } from '@angular/material/snack-bar'; //importing snackbar library
import { Observable } from 'rxjs';
import { Expense } from '../model/expense';
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(
    private firestore: AngularFirestore,
    private matSnackBar: MatSnackBar
  ) {}

  /* database service to create expenses inside firestore*/
  createExpenseInsideFirestoreDB(doc: any) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('expenses')
        .add(doc)
        .then(
          (response) => {
            console.log('expense created successfully');
            alert('expense created successfully');
          },
          (reject) => {
            console.log('error in creating expense' + reject);
          }
        );
    });
  }

  /* get all expense from firestore database */
  getAllExpenseFromFirestoreDB() {
    return this.firestore.collection('expenses').snapshotChanges();
  }

  /* get expense by id */
  getExpenseById(id) {
    return this.firestore.collection('expenses').doc(id).valueChanges();
  }

  /* update expense by id and form values */
  updateExpenseByIdAndFormValues(id: any, expense: Expense) {
    return this.firestore.collection('expenses').doc(id).update({
      amount: expense.amount,
      name: expense.name,
      type: expense.type,
      date: expense.date,
      purpose: expense.purpose,
    });
  }

  /* delete expense by id */
  deleteExpenseById(id: any) {
    return this.firestore.collection('expenses').doc(id).delete();
  }
}
