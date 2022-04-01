import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExpenseComponent } from './views/edit-expense/edit-expense.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ListExpensesPageComponent } from './views/list-expenses-page/list-expenses-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'list-expenses',
    component: ListExpensesPageComponent,
  },
  { path: 'edit-expense/:id', component: EditExpenseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
