package com.dedalus.textanalyzer.service;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@Service
public class TextAnalyzerService {

    private static final Set<Character> VOWELS = Set.of('A', 'E', 'I', 'O', 'U');
    public enum Mode { VOWELS, CONSONANTS }
    public  Map<Character, Integer> analyze(Mode mode, String text) {
        Map<Character, Integer> result = new HashMap<>();
        for (char charToAnalze : text.toUpperCase().toCharArray()) {
            if (Character.isLetter(charToAnalze)) {
                if (mode == Mode.VOWELS && VOWELS.contains(charToAnalze)) {
                    result.put(charToAnalze, result.getOrDefault(charToAnalze, 0) + 1);
                } else if (mode == Mode.CONSONANTS && !VOWELS.contains(charToAnalze)) {
                    result.put(charToAnalze, result.getOrDefault(charToAnalze, 0) + 1);
                }
            }
        }
        return result;
    }

}
