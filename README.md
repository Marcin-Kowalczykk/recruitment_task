# recruitment_task

#Cześć ! 

Aby uruchomić aplikację wystarczy wpisać w konsoli npm install a następnie npm start.

Do wykonania zadania stworzyłem 3 branche kolejno Feature/App, Feature/App-scss oraz Feature/App-bonus.

Pierwszy branch(Feature/App) jest całkowicie działającym rozwiązaniem zadania według wytycznych z tą różnicą, że do ostylowania aplikacji użyłem biblioteki 
styled-components, ponieważ osobiście preferuję takie podejście oraz najczęściej je wykorzystuję.

Drugi branch(Feature/App-scss) jest również rozwiązaniem zadania z tą różnicą, że do ostylowania aplikacji wykorzystałem preprocesor CSS: SASS, a dokładniej SCSS,
ponieważ został wymieniony w dostarczonych wytycznych. Efekt wizualny aplikacji nie uległ zmianie w stosunku do pierwszego podejścia.

Trzeci branch(Feature/App-bonus) jest rozwiązaniem zadania z dodatkiem kilku funkcjonalności, które mogłyby się przydać w przypadku rozbudowania aplikacji. Przy 
aktualnym stanie aplikacji nie mają one dużego zastosowania. 
Dodano: 
- Reużywalny przycisk, który mógłby być zastosowany w przypadku gdyby podobne przyciski występowały na stronie w wielu miejscach(w wielu komponentach).
- Custom hook odpowiedzialny za pobieranie danych, również mógłby zostać wykorzystany w wielu miejscach na stronie jeśli występowałyby podobne zapytania.
- Folder, w którym znajdują się wszystkie komponenty związane z tablicą ponieważ w folderze components również mogłyby się znajdować inne grupy komponentów
  odpowiedzialne za interfejs użytkownika.
  
 Do wykonania aplikacji skorzystałem również z biblioteki axios w celu pobrania danych z pliku data.json.
