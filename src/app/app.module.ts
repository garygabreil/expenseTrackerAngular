import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './views/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment'; //important
import { AngularFireModule } from '@angular/fire/compat'; //important
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; //important

import { MatCardModule } from '@angular/material/card';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ListExpensesPageComponent } from './views/list-expenses-page/list-expenses-page.component'; // notification

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EditExpenseComponent } from './views/edit-expense/edit-expense.component'; //progress-bar

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListExpensesPageComponent,
    EditExpenseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFirestoreModule, //important
    AngularFireModule.initializeApp(environment.firebaseConfig), //important
    MatSnackBarModule,
    MatCardModule,

    /* progress bar */
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
