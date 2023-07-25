//this is RentalModule.component.ts
import { NgModule } from '@angular/core';
import { TmerListComponent } from './tmer-list/tmer-list.component';
import { TmerListItemComponent } from './tmer-list-item/tmer-list-item.component';
import { TmersComponent } from './tmers.component';

import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TmerService } from './shared/tmer.service';
import { TmerDetailComponent } from './tmer-detail/tmer-detail.component';
import { UppercasePipe } from '../common/pipes/uppercase.pipe';

const routes: Routes = [
  {path:"tmers",
   component:TmersComponent,
    children: [
      {path:'',component:TmerListComponent},
      {path:':tmerId', component:TmerDetailComponent}
    ]}

]




@NgModule ({
  declarations: [
    TmerListComponent,
    TmerListItemComponent,
    TmersComponent,
    TmerDetailComponent,
    UppercasePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [TmerService]
})
export class TmerModule {

}
