#Cześć !

## Wprowadzenie

Prosimy Cię o wykonanie prostej aplikacji js oraz ostylowanie kilku elementów interfejsu użytkownika 
przy użyciu css lub sass/less.
Po otrzymaniu Twojego kodu, który ma być odpowiedzią na poniższe zadanie będziemy chcieli ocenić 
Twój potencjał, żeby w następnym etapie na bazie utworzonego przez Ciebie kodu razem spróbować 
rozwinąć tę aplikację oraz omówić ewnentualne problemy, które napotkałaś/eś podczas tworzenia kodu aplikacji.

Rozwiązanie zadania chcielibyśmy otrzymać w terminie **7 dni** od momentu jego otrzymania, jeżeli będzie jakiś 
niewielki poślizg, to nie będziemy dyskwalifikować kandydatury.

### Opis aplikacji

Potrzebujemy aplikacji napisanej w języku **javascript**, która prezentuje listę samochodów bazując na pliku _data.json_.  
Na pojedynczy samochód składają się następujące informacje:  

- zdjęcie
- marka
- model
- oznaczenie silnika
- nazwa modelu (ciąg znaków złożony wg wzoru : marka model oznaczenie silnika)
- **dostępność** (dostępne wartości: tak/nie)

Jeżeli samochód jest niedostępny, cały wiersz listy powinien podświetlać się na czerwono.

Przy każdym z modeli chcemy żeby znalazł się przycisk zmieniający **dostępność** danego samochodu.
Kliknięcie na niego powinno spowodować zmianę stanu **dostępności** danego samochodu.

Oprócz tego, przy każdym z aut powinien znaleźć się przycisk **usuń**, 
który, po kliknięciu powoduje usunięcie auta z listy.  
  
Aplikacja na tym etapie testowana będzie tylko na przeglądarce chrome, 
nie uwzględniamy urządzeń mobilnych.

Do napisania aplikacji użyj składni ECMA Script 6 oraz najnowszej wersji jednego z 3 frameworków :
- React
- Angular
- Vue.js

### Wygląd

Wygląd list w formie tabelki prezentuje plik _datagrid.png_, prosimy o zaimplementowanie takiego stylu listy.
W kolumnie nazwa chcemy aby dodatkowo znalazło się zdjęcie, zdjęcia może zabraknąć w pliku data.json,
w takim przypadku wyświetlamy tylko nazwę.  
Jeżeli chodzi o wygląd przycisków, pozostawiamy wolną rękę, chętnie zobaczymy jakiś efekt po najechaniu kursorem.

### Zasoby

- w repozytorium zadania znajdziesz plik _data.json_, który jest Twoim źródłem danych
- znajdziesz poglądowy obrazek, w jaki sposób przygotować style css dla aplikacji (_datagrid.json_)

### Kryteria oceny

Podejmiemy się oceny Twojego kodu pod kątem:  

- znajomości języka i wachlarz funkcji natywnych które używasz
- ustrukturyzowania i organizacji kodu w plikach
- dbania o czytelność kodu
- zgodności rozwiązania z treścią zadania

### Wskazówki

- jeżeli korzystasz z sass'a, do budowania wynikowego css'a idealnie byłoby użyć webpacka, 
jeżeli użyjesz czegoś innego opisz nam w README jak zbudować aplikację
- niezbędne będzie użycie AJAX'a do pobrania danych z pliku json
- jeżeli nie możesz poradzić sobie z jakimś problemem, zapisz go sobie na boku i spróbuj ruszyć dalej,
być może uda nam się wspólnie rozwiązać dany problem w kolejnym etapie
- nawet jeżeli aplikacja nie będzie do końca działająca, wyślij nam swój kod
- jeżeli opis zadania jest dla Ciebie niejasny, napisz na adres ``scrum-websites@edpauto.com``, postaramy
się odpowiedzieć na pytania
- styl kodowania css - preferujemy wcięcia na dwie spacje
- styl kodowania js - postaraj trzymać się zasad opisanych na ``https://standardjs.com/``  
  
Powodzenia