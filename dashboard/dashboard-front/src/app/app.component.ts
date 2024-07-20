import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../app/shared/services/api/api.service';
import { DataItem } from './shared/model/data.model';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'dashboard-front';

  data: DataItem[] = [];

  private data1 = [
    {"Country": "United Stated", "Publicatios": "112"},
    {"Country": "United Kingdom", "Publicatios": "100"},
    {"Country": "Germany", "Publicatios": "90"},
    {"Country": "France", "Publicatios": "80"},
    {"Country": "China", "Publicatios": "10"},
  ];

  private countryPublications: {country: string, publications: number}[] = [];

  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.get('data')
            .subscribe((data: DataItem[]) => {
              this.data = data;
              // this.data.forEach(d => {
              //   if (this.countryPublications.hasOwnProperty(d.country)) {
              //     this.countryPublications[d.country];
              //   } else {
              //     this.countryPublications.country = d.country;
              //     this.countryPublications.
              //   }
              // });
              this.createSvg();
              this.drawBars(this.data1);
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
  .domain(data.map(d => d.Country))
  .padding(0.2);

  // Draw the X-axis on the DOM
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

  // Create the Y-axis band scale
  const y = d3.scaleLinear()
  .domain([0, 200])
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d: any) => x(d.Country))
  .attr("y", (d: any) => y(d.Publicatios))
  .attr("width", x.bandwidth())
  .attr("height", (d: any) => this.height - y(d.Publicatios))
  .attr("fill", "#d04a35");
}
}
