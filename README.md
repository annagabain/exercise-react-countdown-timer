I denna övning kommer du att skapa en nedräkningstimer i React. Timern ska starta från ett givet antal sekunder och räkna ner varje sekund. Du kommer att använda React-hooks som useEffect och useRef för att hantera timer-logiken.

<img src="src\assets\screenshot2024-08-29110953.png" width="70%">


<img src="src\assets\screenshot2024-08-2911154.png" width="70%">

Nedräkningstimer

Detta är en nedräkningstimer i React som låter användaren ställa in en anpassad starttid. Funktionen inkluderar:

Ange Starttid: Användaren kan skriva in en starttid mellan 1 och 3600 sekunder. Om det angivna värdet är ogiltigt (utanför detta intervall), visas ett felmeddelande.


Starta/Pausa: Timer kan startas eller pausas med en knapp. Om timern når 0, återställs den till det ursprungliga värdet vid nästa start.


Återställ: En separat knapp gör det möjligt att återställa timern till det ursprungliga värdet och stoppa timern.


Visuellt Meddelande: När nedräkningen är slut, visas ett meddelande med texten "Tidens slut!".


Designen är responsiv och användarvänlig med tydliga färgindikatorer för inmatningens tillstånd och felmeddelanden.
