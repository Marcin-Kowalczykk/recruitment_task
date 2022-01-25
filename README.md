-------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
