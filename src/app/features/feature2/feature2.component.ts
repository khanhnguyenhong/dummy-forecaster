import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature2',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="feature2-container">
      <h1>Feature 2</h1>
      <p>This is the second feature page.</p>
    </div>
  `,
  styles: [`
    .feature2-container {
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
export class Feature2Component {}
