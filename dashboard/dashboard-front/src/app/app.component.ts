import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as d3 from 'd3';
import { ApiService } from '../app/shared/services/api/api.service';
import { CountryPublicationsChartComponent } from './country-publications-chart/country-publications-chart.component';
import { DataItem } from './shared/model/data.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CountryPublicationsChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'dashboard-front';

  data: DataItem[] = [];

  @Input() countryPublications: {country: string, publications: number}[] = [];

  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.get('data')
            .subscribe((data: DataItem[]) => {
              this.data = data;
              
              // prepare (country / publications) chart data
              this.data.forEach(item => {
                  const i = this.countryPublications.findIndex(e => e.country === item.country)
                  if (i > -1) {
                    this.countryPublications[i].publications++;
                  } else {
                    this.countryPublications.push({country: item.country, publications: 1});
                  }
                }
              )
              const unKnownCountryIndex = this.countryPublications.findIndex(e => e.country == "");
              this.countryPublications[unKnownCountryIndex].country = "unknown";
              console.log(this.countryPublications);

              // prepare (country / sector) chart data



              this.createSvg();
              this.drawBars(this.countryPublications);
            })
  }

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}

private drawBars(data: any[]): void {
  // Create the X-axis band scale
  const x = d3.scaleBand()
  .range([0, this.width])
  .domain(data.map(d => d.country))
  .padding(0.2);

  // Draw the X-axis on the DOM
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

  // Create the Y-axis band scale
  const yMax = Math.max.apply(Math, this.countryPublications.map(function(e) { return e.publications; })) * 1.1

  const y = d3.scaleLinear()
  .domain([0, yMax])
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d: any) => x(d.country))
  .attr("y", (d: any) => y(d.publications))
  .attr("width", x.bandwidth())
  .attr("height", (d: any) => this.height - y(d.publications))
  .attr("fill", "#d04a35");
}



}
