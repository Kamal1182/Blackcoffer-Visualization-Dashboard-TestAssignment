import { Component, Input } from '@angular/core';
import * as d3 from 'd3';
import { DataItem } from '../shared/model/data.model';

@Component({
  selector: 'app-sector-publications-chart',
  standalone: true,
  imports: [],
  templateUrl: './sector-publications-chart.component.html',
  styleUrl: './sector-publications-chart.component.css'
})
export class SectorPublicationsChartComponent {
  @Input() data: DataItem[] = [];

  sectorsPublications: {sector: string, publications: number}[] = [];

  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  ngOnInit(): void {
    // prepare (sector / publications) chart data
    this.data.forEach(item => {
      const i = this.sectorsPublications.findIndex(e => e.sector === item.sector)
      if (i > -1) {
        this.sectorsPublications[i].publications++;
      } else {
        this.sectorsPublications.push({sector: item.sector, publications: 1});
      }
    }
    )
    // replace empty sector with unknown sector name
    const unKnownSectorIndex = this.sectorsPublications.findIndex(e => e.sector == "");
    this.sectorsPublications[unKnownSectorIndex].sector = "unknown";

    console.log(this.sectorsPublications);
    
    this.createSvg();
    this.drawBars(this.sectorsPublications);
  }

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
                  .append("svg")
                  .attr("width", this.width + (this.margin * 2))
                  .attr("height", this.height + (this.margin * 2))
                  .append("g")
                  .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
    
    this.svg.append("text")      // text label for the chart
              .attr("x", this.width / 2 )
              .attr("y", 0 )
            .style("text-anchor", "middle")
            .text("Sector / Publications Chart");
}

private drawBars(data: any[]): void {
  // Create the X-axis band scale
  const x = d3.scaleBand()
  .range([0, this.width])
  .domain(data.map(d => d.sector))
  .padding(0.2);

  // Draw the X-axis on the DOM
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

  this.svg.append("text")      // text label for the x axis
            .attr("x", this.width / 2 )
            .attr("y", this.height + this.margin )
          .style("text-anchor", "middle")
          .text("Sector");

  // Create the Y-axis band scale
  const yMax = Math.max.apply(Math, this.sectorsPublications.map(function(e) { return e.publications; })) * 1.1

  const y = d3.scaleLinear()
  .domain([0, yMax])
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(d3.axisLeft(y));

  this.svg.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", -this.margin)
          .attr("x",0 - (this.height / 2))
          .attr("dy", "1em")
          .style("text-anchor", "middle")
          .text("Publications");

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d: any) => x(d.sector))
  .attr("y", (d: any) => y(d.publications))
  .attr("width", x.bandwidth())
  .attr("height", (d: any) => this.height - y(d.publications))
  .attr("fill", "#0000ff");
}

}