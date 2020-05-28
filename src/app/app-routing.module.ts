import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {LoginComponent} from "./components/login/login.component";
import {NgModule} from "@angular/core";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {SinglePostComponent} from "./components/single-post/single-post.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {PropertiesComponent} from "./components/properties/properties.component";
import {ContactComponent} from "./components/contact/contact.component";
import {DealPropertiesComponent} from "./components/deal-properties/deal-properties.component";
import {NewsComponent} from "./components/news/news.component";
import {UserPropertiesComponent} from "./components/user-properties/user-properties.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {PropertyComponent} from "./components/property/property.component";

const routes: Routes = [
    {
        path: '', component: AdminLayoutComponent,
        children: [{
            path: '', component: HomepageComponent
        }, {
            path: 'properties', component: PropertiesComponent
        }, {
            path: 'contact', component: ContactComponent
        }, {
            path: 'deal/property', component: DealPropertiesComponent
        }, {
            path: 'news', component: NewsComponent
        }, {
            path: 'user/properties', component: UserPropertiesComponent
        }, {
            path: 'user/profile', component: UserProfileComponent
        }, {
            path: 'properties/property', component: PropertyComponent
        }, {
            path: 'login', component: LoginComponent,
        }, {
            path: 'register', component: SignUpComponent,
        }, {
            path: 'post', component: SinglePostComponent,
        }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
