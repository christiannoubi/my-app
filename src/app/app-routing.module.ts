import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutingPath} from './routing-path.model';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';

export const routes: Routes = [
  {path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: RoutingPath.LOGIN,
    component: LoginComponent,
  },
  { path: RoutingPath.HOME,
    component: HomeComponent,
  },
  { path: RoutingPath.USERS,
    component: UsersComponent,
  },
  { path: RoutingPath.USER,
    component: UserComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
