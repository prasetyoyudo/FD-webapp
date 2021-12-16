import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent }    from './layout/homepage/homepage.component';
import { MainLayoutComponent }  from './layout/main-layout/main-layout.component'; 


const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    data: {
      title: ''
    },
    children : [
      {
        path: 'homepage',
        component: HomepageComponent,
        data: {
          title: ''
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
