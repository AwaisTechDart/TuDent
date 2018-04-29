import { ConfirmEqualValidatorDirective } from './signup-tutor/shared/confirm-equal-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule, MatInputModule, MatIconModule, MatStepperModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupTutorComponent } from './signup-tutor/signup-tutor.component';
import { SignupGeneralComponent } from './signup-general/signup-general.component';
import { SigninComponent } from './signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    ProfileComponent,
    AboutComponent,
    NotFoundComponent,
    SignupTutorComponent,
    SignupGeneralComponent,
    SigninComponent,
    FooterComponent,
    SearchComponent,
    TeachersListComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'home', component: MainComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'about', component: AboutComponent},
      {path: 'signup_tutor', component: SignupTutorComponent},
      {path: 'signup_normal', component: SignupGeneralComponent},
      {path: 'signin', component: SigninComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
