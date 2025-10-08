
import { TextAnalyzerService } from '../analyzer-service';
import { AnalysisResult } from '../analysis-text';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { triggerAsyncId } from 'async_hooks';
import { Component, signal, computed, effect, OnInit } from '@angular/core';


@Component({
  selector: 'app-analyzer-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './analyzer-component.html',
  styleUrl: './analyzer-component.css'
})
export class AnalyzerComponent {


  inputText = '';
  mode: 'vowels' | 'consonants' = 'vowels';
  resultsHistory = signal<AnalysisResult[]>([]);

  online = false;


  constructor(private analyzerService: TextAnalyzerService) {}

  isOnlineMode(): boolean {
    // Return the current online mode status
      return this.online; 
  }

  toggleMode(event: Event): void {
      this.online = event.target instanceof HTMLInputElement ? event.target.checked : false;
      this.analyzerService.setOnlineMode(this.online);
  }

  clearHistory() {  
    this.resultsHistory.set([]);
  }

  clearInput() {  
    this.inputText = '';
  }

  getMode(): string {
    return this.mode === 'vowels' ? 'Vowels' : 'Consonants';
  }
 
  analyze() {
    if (!this.inputText.trim()) {
      alert('Please enter some text to analyze.');
      return; // Do not analyze empty input
    }
   
    this.analyzerService.analyze(this.mode, this.inputText).subscribe((result: AnalysisResult) => {
    
      if (!result || Object.keys(result).length === 0) {
        alert('No matching characters found in the input text.Try different text or mode.');
        return;
      }
      
      this.resultsHistory.update((current: AnalysisResult[]) => [...current, result]);     
        
    });
  }

    // Computed signal: a human readble string for each result
    humanResults = computed(() =>
      this.resultsHistory().map((result: AnalysisResult) => {
        if (!result) return '';
        return Object.entries(result)
          .map(([letter, count]) => `Letter '${letter}' appears ${count} times`)
          .join(', ');
      })
    );

    getCharacterCounts(counts: { [key: string]: number }): string[] {
      return Object.entries(counts)
        .sort(([charA], [charB]) => charA.localeCompare(charB))
        .map(([char, count]) => `Character '${char}' appears ${count} time${count > 1 ? 's' : ''}`);
    }

}