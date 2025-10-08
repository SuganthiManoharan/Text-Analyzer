package com.dedalus.textanalyzer;

import com.dedalus.textanalyzer.service.TextAnalyzerService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static com.dedalus.textanalyzer.service.TextAnalyzerService.Mode;

@SpringBootTest
class TextanalyzerApplicationTests {

	@Autowired
	private TextAnalyzerService analyzerService;

	@Test
	void analyze_VowelsMode() {

		String text = "I love coffee.";
		Map<Character, Integer> counts = analyzerService.analyze(Mode.VOWELS, text);
		assertEquals(3, counts.get('E'));
		assertEquals(2, counts.get('O'));
		assertEquals(1, counts.get('I'));
		assertNull(counts.get('U'), "Should not count 'U'.");
		assertNull(counts.get('H'), "Should not count consonants like 'H'.");
	}

	@Test
	void analyze_VowelsMode_EmptyMap() {
		String text = "";

		Map<Character, Integer> counts = analyzerService.analyze(Mode.VOWELS, text);

		assertTrue(counts.isEmpty(), "Count map should be empty for an empty string.");
	}

	@Test
	void analyze_VowelsMode_OnlyNonLetters_ShouldReturnEmptyMap() {
		String text = "123!";
		Map<Character, Integer> counts = analyzerService.analyze(Mode.VOWELS, text);

		assertTrue(counts.isEmpty(), "Count map should be empty when only non-letters are present.");
	}


	@Test
	void analyze_ConsonantsMode_StandardSentence_ShouldReturnCorrectCounts() {
		String text = "Where am I";
		Map<Character, Integer> counts = analyzerService.analyze(Mode.CONSONANTS, text);
		assertEquals(1, counts.get('W'));
		assertEquals(1, counts.get('r'));
		assertNull(counts.get('U'), "Should not count 'U' (a vowel).");
	}


	@Test
	void analyze_ConsonantsMode_TextWithOnlyVowels_ShouldReturnEmptyMap() {
		String text = "AEUaeiou";
		Map<Character, Integer> counts = analyzerService.analyze(Mode.CONSONANTS, text);
		assertTrue(counts.isEmpty(), "Count map should be empty when only vowels are present.");
	}


}
