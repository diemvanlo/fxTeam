import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DepartComponent} from "../../depart/depart.component";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatTooltipModule} from "@angular/material/tooltip";
import {RouterModule} from "@angular/router";
import {AdminLayoutRoutes} from "./admin-layout.routing";
import {FormsModule} from "@angular/forms";
import {StaffsComponent} from "../../staffs/staffs.component";
import {RecordsComponent} from "../../records/records.component";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [DepartComponent, StaffsComponent, RecordsComponent],
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
