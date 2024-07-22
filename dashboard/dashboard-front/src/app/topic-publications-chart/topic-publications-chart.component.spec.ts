import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPublicationsChartComponent } from './topic-publications-chart.component';

describe('TopicPublicationsChartComponent', () => {
  let component: TopicPublicationsChartComponent;
  let fixture: ComponentFixture<TopicPublicationsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicPublicationsChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicPublicationsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
