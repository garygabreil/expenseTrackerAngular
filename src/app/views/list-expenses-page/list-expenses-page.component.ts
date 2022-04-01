import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-list-expenses-page',
  templateUrl: './list-expenses-page.component.html',
  styleUrls: ['./list-expenses-page.component.css'],
})
export class ListExpensesPageComponent implements OnInit {
  expenseList: any[] = [];

  constructor(
    private firestoreService: DatabaseService,
    private router: Router // dependency injection for router) {} //dependeny injection
  ) {} //dependeny injection

  ngOnInit(): void {
    this.firestoreService
      .getAllExpenseFromFirestoreDB()
      .subscribe((response) => {
        this.expenseList = response.map((res) => {
          return [res.payload.doc.data() as any, res.payload.doc.id];
        });

        console.log('this is my expenseListArray ' + this.expenseList);
      });
  }

  getExpenseInformationById(id: any) {
    this.firestoreService
      .getExpenseById(id)
      .subscribe((res) => console.log(res));
  }

  deleteExpenseById(id: any) {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      this.firestoreService
        .deleteExpenseById(id)
        .then((success) => {
          console.log('id-' + id + ' deleted successfully..');
        })
        .catch((error) => {
          console.log('error in deletion' + error);
        });
    }
  }
}
