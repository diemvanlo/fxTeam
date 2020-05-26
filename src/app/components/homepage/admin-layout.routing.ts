import {Routes} from "@angular/router";
import {DepartComponent} from "../../depart/depart.component";
import {StaffsComponent} from "../../staffs/staffs.component";
import {RecordsComponent} from "../../records/records.component";


export const AdminLayoutRoutes: Routes = [
  {path: 'depart', component: DepartComponent},
  {path: 'staffs', component: StaffsComponent},
  {path: 'records', component: RecordsComponent},
  {path: 'records/:id', component: RecordsComponent},
]
