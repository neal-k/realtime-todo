import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TodoComponent } from './todo/todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DateTimePipePipe } from './date-time-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DateTimePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    AmplifyAuthenticatorModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
