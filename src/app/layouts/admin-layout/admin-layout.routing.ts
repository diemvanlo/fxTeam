import {Routes} from "@angular/router";
import {PropertiesComponent} from "../../components/properties/properties.component";
import {ContactComponent} from "../../components/contact/contact.component";
import {DealPropertiesComponent} from "../../components/deal-properties/deal-properties.component";
import {NewsComponent} from "../../components/news/news.component";
import {SignUpComponent} from "../../components/sign-up/sign-up.component";
import {SinglePostComponent} from "../../components/single-post/single-post.component";
import {UserPropertiesComponent} from "../../components/user-properties/user-properties.component";
import {UserProfileComponent} from "../../components/user-profile/user-profile.component";


export const AdminLayoutRoutes: Routes = [
    {
        path: 'properties', component: PropertiesComponent
    }, {
        path: 'contact', component: ContactComponent
    }, {
        path: 'deal/property', component: DealPropertiesComponent
    }, {
        path: 'news', component: NewsComponent
    },  {
        path: 'user/properties', component: UserPropertiesComponent
    }, {
        path: 'user/profile', component: UserProfileComponent
    }
]
