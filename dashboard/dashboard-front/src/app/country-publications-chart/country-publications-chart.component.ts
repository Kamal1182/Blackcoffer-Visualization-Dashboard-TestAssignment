import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-publications-chart',
  standalone: true,
  imports: [],
  templateUrl: './country-publications-chart.component.html',
  styleUrl: './country-publications-chart.component.css'
})
export class CountryPublicationsChartComponent {

  @Input() countryPublications: {country: string, publications: number}[] = [];

  ngOnInit(): void {
    console.log(this.countryPublications);
  } 

}
