import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderNavbarComponent } from './layouts/header-navbar/header-navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        LoginComponent,
        HeaderNavbarComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule, AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
