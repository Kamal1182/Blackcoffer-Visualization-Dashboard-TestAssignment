import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../app/shared/services/api/api.service';
import { DataItem } from './shared/model/data.model';

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

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.get('data')
            .subscribe((data: DataItem[]) => {
              this.data = data;
              this.createChart();
            })
  }

  private createChart(): void {
    // const element = document.getElementById('chart');
    // if (!element) {
    //   console.error('Chart element not found');
    //   return;
    // }
    // const width = element.clientWidth;
    // const height = element.clientHeight;

    // const svg = d3.select(element)
    //               .append('svg')
    //               .attr('width', width)
    //               .attr('height', height);

    // // Example: Create a bar chart
    // const x = d3.scaleBand<DataItem>()
    //             .range([0, width])
    //             .padding(0.1);

    // const y = d3.scaleLinear()
    //             .range([height, 0]);

    // x.domain(this.data.map(d => d.label)); // Adjust as per your data structure
    // y.domain([0, d3.max(this.data, d => d.value)]); // Adjust as per your data structure

    // svg.selectAll('.bar')
    //     .data(this.data)
    //     .enter()
    //     .append('rect')
    //     .attr('class', 'bar')
    //     .attr('x', d => x(d.label))
    //     .attr('width', x.bandwidth())a
    //     .attr('y', d => y(d.value))
    //     .attr('height', d => height - y(d.value));
  }
}
