import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CarAddComponent} from './car-add/car-add.component'
import {CarListComponent} from './car-list/car-list.component'
import {HelpComponent} from './help/help.component'

const routes: Routes = [
  {
    path: '',
    component: CarListComponent
  },
  {
    path: 'add',
    component: CarAddComponent
  },
  {
    path: 'help',
    component: HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
