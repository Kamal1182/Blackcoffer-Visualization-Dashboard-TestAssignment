import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionPublicationsChartComponent } from './region-publications-chart.component';

describe('RegionPublicationsChartComponent', () => {
  let component: RegionPublicationsChartComponent;
  let fixture: ComponentFixture<RegionPublicationsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionPublicationsChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegionPublicationsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
