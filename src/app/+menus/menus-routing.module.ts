import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/auth-guard.service';
import { AllMenusComponent } from './all-menus/all-menus.component';
import { NewMenuComponent } from './new-menu/new-menu.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';



const routes: Routes = [
    {path: 'menus', data: {title: 'منوها'}, children: [
            {path: 'listMenu', data: {title: 'همه منوها'}, component: AllMenusComponent},
            {path: 'newMenu', data: {title: 'منو جدید'}, component: NewMenuComponent},
            {path: 'editMenu/:id', data: {title: 'ویرایش منو'}, component: EditMenuComponent},
        ]},
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenusRoutingModule { }
