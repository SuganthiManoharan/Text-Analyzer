import { Injectable,signal  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TextAnalyzerUtil, AnalysisMode, AnalysisResult } from './analysis-text';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TextAnalyzerService {
  online = false;
   private readonly API_URL = 'http://localhost:8080/api/analyze';

  constructor(private http: HttpClient) {}

  setOnlineMode(online: boolean): void {
    this.online = online;
  }

  analyze(mode: AnalysisMode, text: string): Observable<AnalysisResult> {
    if (this.online) {
      
      // Replace URL with actual backend endpoint
      return this.http.post<AnalysisResult>(
        this.API_URL,
        { mode, text }
      );
    }
    return of(TextAnalyzerUtil.analyze(mode, text));
  }
  
  
}


