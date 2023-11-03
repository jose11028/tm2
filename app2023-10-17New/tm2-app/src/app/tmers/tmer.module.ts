//this is RentalModule.component.ts
import { NgModule } from '@angular/core';
import { TmerListComponent } from './tmer-list/tmer-list.component';
import { TmerListItemComponent } from './tmer-list-item/tmer-list-item.component';
import { TmersComponent } from './tmers.component';
import { NgPipesModule } from 'ngx-pipes';

import { MapModule } from '../common/map/map.module';
import { Daterangepicker } from 'ng2-daterangepicker';

import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TmerService } from './shared/tmer.service';
import { TmerDetailComponent } from './tmer-detail/tmer-detail.component';
import { UppercasePipe } from '../common/pipes/uppercase.pipe';

import { AuthGuard } from '../auth/shared/auth.guard';
import { TmerDetailBookingComponent } from './tmer-detail/tmer-detail-booking/tmer-detail-booking.component';

const routes: Routes = [
  {path:"tmers",
   component:TmersComponent,
    children: [
      {path:'',component:TmerListComponent},
      {path:':tmerId', component:TmerDetailComponent, canActivate: [AuthGuard]} //this option (AuthGuard) block the option /login
    ]}

]




@NgModule ({
  declarations: [
    TmerListComponent,
    TmerListItemComponent,
    TmersComponent,
    TmerDetailComponent,
    UppercasePipe,
    TmerDetailBookingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MapModule,
    NgPipesModule,
    Daterangepicker
    
   
  ],
  providers: [TmerService]
})
export class TmerModule {

}
