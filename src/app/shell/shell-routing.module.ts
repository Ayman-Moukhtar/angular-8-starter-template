import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(mod => mod.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    loadChildren: () => import('../about/about.module').then(mod => mod.AboutModule),
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
