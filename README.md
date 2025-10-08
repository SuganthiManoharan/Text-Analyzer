
Implement in Angular application that supports following requirements:

·         a user can enter a text and start the analysis with the press of a button

·         the logic provided in the Text Analyzer java class (attached TextAnalyzer.java) is to be reused for the TypeScript text analysis; the code should also be refactored to be in a "good enough" state

·         write a test(s) that checks the output of the text analyzer logic

·         the content of the analysis is displayed as a human readable output in the UI.

·         An existing (previous) output should remain visible

·         implement a toggle switch that changes the application behavior between online and offline functionality in this way:

o    Offline: The application uses its own implementation of the "Text Analyzer" to analyze the user input

o    Online: The application uses the REST API of the server to analyze the user input

 

Backend part:

A backend is implemented in Spring Bootthat  provides functionality of the Text Analyzer.
