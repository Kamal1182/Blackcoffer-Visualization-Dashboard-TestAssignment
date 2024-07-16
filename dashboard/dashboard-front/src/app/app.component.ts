import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../app/shared/services/api/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'dashboard-front';

  data = [];

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.get('data')
            .subscribe(data => {
              this.data = data;
            })
    console.log(this.data);        
  }
}
