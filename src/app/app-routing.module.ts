
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {LoginComponent} from "./components/login/login.component";
import {NgModule} from "@angular/core";


const routes: Routes = [
  {
    path: '', component: HomepageComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/routing.module#RoutingModule'
    }]
  },
  {
    path: 'login', component: LoginComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
