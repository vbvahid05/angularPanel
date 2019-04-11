import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusRoutingModule } from './menus-routing.module';
import { AllMenusComponent } from './all-menus/all-menus.component';
import { NewMenuComponent } from './new-menu/new-menu.component';
import { MatTableModule } from '@angular/material/table';
import { DropdownDirective } from '../shared/directives/dropdown.directive';
import { MouseHoverDirective } from '../shared/directives/mouse-hover.directive';
import {
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSliderModule,
    MatSlideToggleModule, MatSnackBarModule,
    MatToolbarModule
} from '@angular/material';
import { DialogMenuComponent } from './all-menus/dialog-menu/dialog-menu.component';
import { HttpService } from '../shared/services/httpService.service';
import { RouterModule } from '@angular/router';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AllMenusComponent,
                 NewMenuComponent ,
                 DropdownDirective,
                 MouseHoverDirective,
                 DialogMenuComponent,
                 EditMenuComponent,
  ],
  imports: [
    CommonModule,
      MatTableModule,
      MatPaginatorModule,
      MatSliderModule,
      MatMenuModule,
      MatIconModule,
      MatDialogModule,
      MatToolbarModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      RouterModule,
      FormsModule ,
      ReactiveFormsModule

  ],
    providers: [
        HttpService,
    ],
    exports: [
        MenusRoutingModule ,
    ]
    ,
    entryComponents: [DialogMenuComponent]
})
export class MenusModule { }
