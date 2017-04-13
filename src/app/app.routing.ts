import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './component/list-page/list-page.component';
import { DetailsPageComponent } from './component/details-page/details-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { WhyUsComponent } from './component/why-us/why-us.component';
import { AdvertiseComponent } from './component/advertise/advertise.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'list/:listName', component: ListPageComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'advertise', component: AdvertiseComponent },
  { path: 'whyUs', component: WhyUsComponent },
  { path: 'details/:Id', component: DetailsPageComponent }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes, { useHash: true });