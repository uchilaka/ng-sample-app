import { PassengerDashboardModule } from './passenger-dashboard.module';

describe('PassengerDashboardModule', () => {
  let passengerDashboardModule: PassengerDashboardModule;

  beforeEach(() => {
    passengerDashboardModule = new PassengerDashboardModule();
  });

  it('should create an instance', () => {
    expect(passengerDashboardModule).toBeTruthy();
  });
});
