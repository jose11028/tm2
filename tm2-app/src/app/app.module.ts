import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { TmersComponent } from './tmers/tmers.component';   //this is RentalComponent


import { TmerModule } from './tmers/tmer.module';



const routes: Routes = [
  {path:"", redirectTo:'/tmers', pathMatch: 'full'}

]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    TmerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
