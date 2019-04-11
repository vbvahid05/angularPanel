import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AuthGuard } from '../shared/auth-guard.service';
import { SingleComponent } from './single/single.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
    // {path: 'posts', component: ListComponent },
    //{path: 'posts', canActivate: [AuthGuard], data: {title: 'نوشته ها'}, children: [
    {path: 'posts', data: {title: 'نوشته ها'}, children: [
            {path: 'list', data: {title: 'همه نوشته ها'}, component: ListComponent},
            {path: 'single', data: {title: 'نوشته'}, component: SingleComponent},
            {path: 'category', data: {title: 'دسته بندی'}, component: CategoryComponent},
        ]},
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule { }
