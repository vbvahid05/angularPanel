import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { AlertComponent } from '../+alert/alert.component';

import { AlertModule as MkAlertModule,
         TabsModule as  MkTabsModule,
                        DropdownModule,
                        BoxModule } from 'angular-admin-lte';
@NgModule({
  declarations: [UsersComponent, AlertComponent],
  imports: [
    CommonModule,
      MkAlertModule,
      BoxModule,
      UsersRoutingModule ,
      MkTabsModule ,
      DropdownModule
  ]
})
export class UsersModule { }
