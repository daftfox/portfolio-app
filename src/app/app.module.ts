import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// components
import { YearsSinceDateComponent } from './components/years-since-date.component';
import { HomeComponent } from './components/home.component';
import { ExperienceComponent } from './components/experience.component';
import { ContactComponent } from 'app/components/contact.component';
import { NavigationComponent } from './components/navigation.component';
import { ModalComponent } from './components/modal.component';

// services

// pipes
import { CapitalizePipe } from './pipes/capitalize.pipe';

// should be loaded AFTER BrowserAnimationsModule
/*import { MdButtonModule, MdCardModule, MdCheckboxModule } from '@angular/material';*/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    ContactComponent,
    NavigationComponent,
    YearsSinceDateComponent,
    ModalComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class AppModule { }
