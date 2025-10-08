import { TextAnalyzerUtil } from './analysis-text';

describe('TextAnalyzerUtil', () => {
  it('counts vowels correctly', () => {
    const result = TextAnalyzerUtil.analyze('vowels', 'Rain rain come again,little Johny wants to play in the rain !');
    expect(result['A']).toBe(7);
    expect(result['O']).toBe(3);
    expect(result['E']).toBe(3);
    expect(result['I']).toBe(6);

    expect(result['U']).toBeUndefined();

    expect(result['Z']).toBeUndefined();
  });

  it('counts consonants correctly', () => {
    const result = TextAnalyzerUtil.analyze('consonants', 'Rain rain come again,little Johny wants to play in the rain !');
    expect(result['R']).toBe(3);
    expect(result['N']).toBe(7);  
    expect(result['T']).toBe(5);
    expect(result['L']).toBe(3);
    expect(result['Z']).toBeUndefined();

  });

  it('is case insensitive', () => {
    const result = TextAnalyzerUtil.analyze('vowels', 'aAeEiIoOuU');
    expect(result['A']).toBe(2);
    expect(result['E']).toBe(2);
    expect(result['I']).toBe(2);
    expect(result['O']).toBe(2);
    expect(result['U']).toBe(2);
  });

  it('ignores non-letter characters', () => {
    const result = TextAnalyzerUtil.analyze('vowels', 'A1!e@i#o$u%');
    expect(result['A']).toBe(1);
    expect(result['E']).toBe(1);
    expect(result['I']).toBe(1);
    expect(result['O']).toBe(1);
    expect(result['U']).toBe(1);
  });
    
});