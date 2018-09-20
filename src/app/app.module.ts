import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

// Importing and declaring ALL dependencies at the module level makes depenency management simpler
import { AppComponent } from './app.component';

// import { PassengerComponent } from './passenger/passenger.component';
// import { PassengerDetailComponent } from './passenger-detail/passenger-detail.component';
import { PipeEgComponent } from './pipe-eg/pipe-eg.component';
// import { SvgTestComponent } from './svg-test/svg-test.component';

@NgModule({
  declarations: [
    AppComponent,
    // PassengerComponent,
    PipeEgComponent
    // PassengerDetailComponent,
    // SvgTestComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    CommonModule,
    FormsModule,
    // Custom modules
    PassengerDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
