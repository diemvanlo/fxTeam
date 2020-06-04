import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomepageComponent} from './components/homepage/homepage.component';
import {LoginComponent} from './components/login/login.component';
import {HeaderNavbarComponent} from './layouts/header-navbar/header-navbar.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {PropertiesComponent} from './components/properties/properties.component';
import {ContactComponent} from './components/contact/contact.component';
import {NewsComponent} from './components/news/news.component';
import {UserPropertiesComponent} from './components/user-properties/user-properties.component';
import {DealPropertiesComponent} from './components/deal-properties/deal-properties.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {SinglePostComponent} from './components/single-post/single-post.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {PropertyComponent} from './components/property/property.component';
import {MatButtonModule, MatFormFieldControl, MatFormFieldModule, MatIconModule, MatStepperModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DemoMaterialModule} from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    HeaderNavbarComponent,
    FooterComponent,
    PropertiesComponent,
    ContactComponent,
    NewsComponent,
    UserPropertiesComponent,
    DealPropertiesComponent,
    UserProfileComponent,
    SignUpComponent,
    SinglePostComponent,
    AdminLayoutComponent,
    PropertyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    DemoMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
