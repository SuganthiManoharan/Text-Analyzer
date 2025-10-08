package com.dedalus.textanalyzer.controller;

// TextAnalyzerController.java (REST API Endpoint)

import com.dedalus.textanalyzer.service.TextAnalyzerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class TextAnalyzerController {

    private final TextAnalyzerService analyzerService;

    public TextAnalyzerController(TextAnalyzerService analyzerService) {
        this.analyzerService = analyzerService;
    }

    @PostMapping("/analyze")
    public Map<Character, Integer> analyze(@RequestBody AnalysisRequest request) {
        TextAnalyzerService.Mode mode = TextAnalyzerService.Mode.valueOf(request.getMode().toUpperCase());
        return analyzerService.analyze(mode, request.getText());
    }

    public static class AnalysisRequest {
        private String mode;
        private String text;

        public String getMode() { return mode; }
        public void setMode(String mode) { this.mode = mode; }
        public String getText() { return text; }
        public void setText(String text) { this.text = text; }
    }
    // Example API Usage: GET /api/analyze?text=Hello%20World&type=VOWELS
}