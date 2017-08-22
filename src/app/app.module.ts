import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// components
import { YearsSinceDateComponent } from './components/years-since-date.component';
import { AboutComponent } from './components/about.component';
import { ExperienceComponent } from './components/experience.component';
import { ContactComponent } from 'app/components/contact.component';
import { NavigationComponent } from './components/navigation.component';
import { ModalComponent } from './components/modal.component';

// services
import { ExperienceService } from './services/experience.service';
import { SkillService } from './services/skill.service';

// pipes
import { CapitalizePipe } from './pipes/capitalize.pipe';

// should be loaded AFTER BrowserAnimationsModule
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  /*{
    path: 'contact',
    component: ContactComponent
  },*/
  {
    path: '**',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
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
      {
        enableTracing: false,  // <-- debugging purposes only
        useHash: true
      }
    )
  ],
  providers: [
    ExperienceService,
    SkillService
  ],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class AppModule { }
