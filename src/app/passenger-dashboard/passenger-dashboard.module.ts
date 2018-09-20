// @IMPORTANT an example of a feature module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rando other component(s)
import { SvgTestComponent } from './components/svg-test/svg-test.component';

import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailComponent,
    // Misc other component(s)
    SvgTestComponent
  ],
  // @IMPORTANT to allow use of these components in other module(s)
  exports: [PassengerDashboardComponent]
})
export class PassengerDashboardModule {}
