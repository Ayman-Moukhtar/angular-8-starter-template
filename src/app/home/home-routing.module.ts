import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { JsonPlaceholderCardComponent } from './components/json-placeholder-card/json-placeholder-card.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class HomeRoutingModule {
  public static readonly components = [HomeComponent, JsonPlaceholderCardComponent];
}
