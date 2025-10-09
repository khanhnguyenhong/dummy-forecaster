import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <h1>Welcome to Dummy Forecaster</h1>
      <p>This is the home page. Use the menu to navigate to different features.</p>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      color: #3f51b5;
      margin-bottom: 1rem;
    }
  `]
})
export class HomeComponent {}
