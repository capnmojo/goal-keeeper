import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PersonBannerComponent } from './person-banner/person-banner.component';
import { GoalCardComponent } from './goal-card/goal-card.component';
import { ContainerCardComponent } from './container-card/container-card.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PersonBannerComponent,
    GoalCardComponent,
    ContainerCardComponent,
    CategoryViewComponent,
    PersonViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
