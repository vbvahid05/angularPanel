import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [  ListComponent, SingleComponent, CategoryComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
    exports: [
        PostsRoutingModule
    ]

})
export class PostsModule { }
