import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupTutorComponent } from './signup-tutor/signup-tutor.component';
import { SignupGeneralComponent } from './signup-general/signup-general.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    FooterComponent,
    ProfileComponent,
    AboutComponent,
    NotFoundComponent,
    SignupTutorComponent,
    SignupGeneralComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'main', component: MainComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'about', component: AboutComponent},
      {path: 'signup/tutor', component: SignupTutorComponent},
      {path: 'signup/normal', component: SignupGeneralComponent},
      {path: 'signin', component: SigninComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
