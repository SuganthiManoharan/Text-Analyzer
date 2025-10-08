export type AnalysisMode = 'vowels' | 'consonants';

export interface AnalysisResult {
  [letter: string]: number;
}

const vowels = ['A', 'E', 'I', 'O', 'U'];

export class TextAnalyzerUtil {
  static analyze(mode: AnalysisMode, text: string): AnalysisResult {
    const result: AnalysisResult = {};
    for (const char of text.toUpperCase()) {
      if (this.isLetter(char)) {
        if (mode === 'vowels' && vowels.includes(char)) {
          result[char] = (result[char] || 0 ) + 1;
        } else if (mode === 'consonants' && !vowels.includes(char)) {
          result[char] = (result[char] || 0) + 1;
        }
      }
    }

    return result;
  }

  private static isLetter(char: string) : boolean {
    return /[A-Z]/.test(char);
  }
}


