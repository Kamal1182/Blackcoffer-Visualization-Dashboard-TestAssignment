import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPublicationsChartComponent } from './country-publications-chart.component';

describe('CountryPublicationsChartComponent', () => {
  let component: CountryPublicationsChartComponent;
  let fixture: ComponentFixture<CountryPublicationsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryPublicationsChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryPublicationsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
