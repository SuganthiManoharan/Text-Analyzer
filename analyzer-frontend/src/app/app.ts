import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnalyzerComponent } from "./text-analyzer/analyzer-component/analyzer-component"; // Import CommonModule


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, AnalyzerComponent], // Add CommonModule here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
showAlert() {
  alert('Hello, ' + this.fullName());
}
  protected readonly title = signal('Sachin');
  fullName = signal('Sachin');
  isVisible = signal(true);
  count = 0;

  toggleVisibility() {
    this.isVisible.set(!this.isVisible());
  }

  increment () {
    this.count++;
  }


}
