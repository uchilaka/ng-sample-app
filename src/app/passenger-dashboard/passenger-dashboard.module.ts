// @IMPORTANT an example of a feature module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// Rando other component(s)
import { SvgTestComponent } from './components/svg-test/svg-test.component';

import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

// service
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
  imports: [CommonModule, HttpModule],
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailComponent,
    // Misc other component(s)
    SvgTestComponent
  ],
  // @IMPORTANT to allow use of these components in other module(s)
  exports: [PassengerDashboardComponent],
  // @IMPORTANT a service needs to be registered as a provider
  providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {}
