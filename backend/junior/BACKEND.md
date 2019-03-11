#Cześć !

## Wprowadzenie

Prosimy Cię o wykonanie prostej aplikacji napisanej w języku PHP 7 przy użyciu silnika bazy danych.
Po otrzymaniu Twojego kodu, który ma być odpowiedzią na poniższe zadanie będziemy chcieli ocenić 
Twój potencjał, żeby w następnym etapie na bazie utworzonego przez Ciebie kodu razem spróbować 
rozwinąć tę aplikację oraz omówić ewnentualne problemy, które napotkałaś/eś podczas tworzenia kodu aplikacji.

### Opis aplikacji

Potrzebujemy aplikacji, która prezentuje listę samochodów bazując na pliku _data.json_.  
Musisz zadbać o import danych do jakiejkolwiek wybranej bazy danych (MySQL, PostgreSQL, SQLite)
Na pojedynczy samochód składają się następujące informacje:  

- zdjęcie
- marka
- model
- oznaczenie silnika
- nazwa modelu (ciąg znaków złożony wg wzoru : marka model oznaczenie silnika)
- **dostępność** (dostępne wartości: tak/nie)

Jeżeli samochód jest niedostępny, cały wiersz listy powinien w jakiś sposób być oznaczony.

Przy każdym z modeli chcemy żeby znalazł się przycisk zmieniający **dostępność** danego samochodu.
Kliknięcie na niego powinno spowodować zmianę stanu **dostępności** danego samochodu.

Oprócz tego, przy każdym z aut powinien znaleźć się przycisk **usuń**, 
który, po kliknięciu powoduje usunięcie auta z bazy danych.  
  

### Wygląd

Wygląd interfejsu nie ma dla nas znaczenia, chcielibyśmy żeby było czytelnie.

### Zasoby

- w repozytorium zadania znajdziesz plik _data.json_, który jest Twoim źródłem danych

### Kryteria oceny

Podejmiemy się oceny Twojego kodu pod kątem:  

- znajomości języka
- znajomości zasad programowania obiektowego
- znajomości frameworka, jeśli jakiś wybrałaś/eś
- ustrukturyzowania i organizacji kodu w plikach
- dbania o czytelność kodu
- zgodności rozwiązania z treścią zadania

### Wskazówki

- korzystamy i lubimy Symfony4, chętnie zobaczymy rozwiązanie w tym frameworku
- korzystaj z dobrodziejstw PHP 7
- jeżeli nie możesz poradzić sobie z jakimś problemem, zapisz go sobie na boku i spróbuj ruszyć dalej,
być może uda nam się wspólnie rozwiązać dany problem w kolejnym etapie
- nawet jeżeli aplikacja nie będzie do końca działająca, wyślij nam swój kod
- jeżeli opis zadania jest dla Ciebie niejasny, napisz na adres ``scrum-websites@edpauto.com``, postaramy
się odpowiedzieć na pytania
- jeżeli czujesz się mocny w tym żeby zaimplementować część aplikacji również po stronie frontu (js, AJAX), 
a po stronie backendu wystawić sobie tylko API - chętnie zobaczymy takie rozwiązanie, ale przy ocenie skupimy się
na warstwie backendowej.
  
Powodzenia