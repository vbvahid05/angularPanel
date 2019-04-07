///<reference path="home/home.component.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { AuthGuard } from './shared/auth-guard.service';
import { AuthService } from './shared/auth.service';
import { PostsModule } from './+posts/posts.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule,
      PostsModule,

  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
    providers: [ AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule {}
