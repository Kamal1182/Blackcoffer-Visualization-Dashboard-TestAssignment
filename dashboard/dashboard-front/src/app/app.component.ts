import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../app/shared/services/api/api.service';
import { CountryPublicationsChartComponent } from './country-publications-chart/country-publications-chart.component';
import { SectorPublicationsChartComponent } from './sector-publications-chart/sector-publications-chart.component';
import { DataItem } from './shared/model/data.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CountryPublicationsChartComponent, SectorPublicationsChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'dashboard-front';

  data: DataItem[] = [];

  dataGotFromAPI: boolean = false;

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.get('data')
            .subscribe((data: DataItem[]) => {
              this.data = data;
              this.dataGotFromAPI = true;
            })
  }

}
