import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatTooltipModule} from "@angular/material/tooltip";
import {RouterModule} from "@angular/router";
import {AdminLayoutRoutes} from "./admin-layout.routing";
import {FormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {ContactComponent} from "../../components/contact/contact.component";
import {PropertiesComponent} from "../../components/properties/properties.component";
import {NewsComponent} from "../../components/news/news.component";
import {UserPropertiesComponent} from "../../components/user-properties/user-properties.component";
import {UserProfileComponent} from "../../components/user-profile/user-profile.component";
import {DealPropertiesComponent} from "../../components/deal-properties/deal-properties.component";


@NgModule({
    declarations: [ContactComponent, PropertiesComponent, DealPropertiesComponent,
        NewsComponent, UserPropertiesComponent, UserProfileComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        TranslateModule
    ],
})
export class RoutingModule {
}
