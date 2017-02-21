import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component';
import {DetailsPageComponent} from './details-page/details-page.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListPageComponent },
  { path: 'details', component: DetailsPageComponent }
];
export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);