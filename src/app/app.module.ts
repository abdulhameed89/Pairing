import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { PairingComponent } from './pairing/pairing.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    PairingComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'students',
        component:StudentComponent
      },
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'history',
        component:HistoryComponent
      },
      {
        path:'pairing',
        component:PairingComponent
      }
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
