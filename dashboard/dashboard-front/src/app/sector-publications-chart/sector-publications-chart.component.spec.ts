import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorPublicationsChartComponent } from './sector-publications-chart.component';

describe('SectorPublicationsChartComponent', () => {
  let component: SectorPublicationsChartComponent;
  let fixture: ComponentFixture<SectorPublicationsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorPublicationsChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorPublicationsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
