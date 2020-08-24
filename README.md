## Directory Structure

- [`src/components`](src/components): common presentational components.
- [`src/i18n`](src/i18n): [i18next](https://www.i18next.com/) configuration.
  - [`src/i18n/resources`](src/i18n/resources): translation files.
- [`src/navigation`](src/navigation): [react native navigation](https://reactnavigation.org/) components and routes names constants.
- [`src/screens`](src/screens): application screens.
- [`src/services`](src/services): functionality to work with http, Async Storage etc.
  - [`src/services/http`](src/services/http): [axios](https://github.com/qiangmao/axios) configuration.
- [`src/store`](src/store): [redux](https://redux.js.org/) configuration for state management. Also to keep state immutable was used [immer](https://github.com/immerjs/immer) library.
- [`src/theme`](src/theme): colors and other common styles props.
- [`src/utils`](src/utils): common javascript functions.
- [`.env`](.env): file with app configuration constants. [More information](https://github.com/goatandsheep/react-native-dotenv).

## Single component(screen or common component) folder structure

- `index.js`: root component file.
- `styled.js`: styles for component in current directory made with [styled-components](https://styled-components.com/).
  - `ChildComponent`
    - `index.js`
    - `styled.js`

## Http service folder structure

- `index.js`: axios configuration file.
  - `auth`
    - `index.js`: file with all queries related to authentication.
    - `formatters.js` file with functions to format response data.

## Store folder structure

- `configureStore.js`: redux store configuring file.
- `reducers.js`: combining of reducers file.
  - `auth`
    - `index.js`: creating of action creators and reducer for authentication. [redux-actions](https://redux-actions.js.org/).
    - `handlers.js`: action handling functions.
    - `selectors.js`: functions to get specific value from store.

## Running the project(Android)

- `yarn install` to install the dependencies
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn android` to run the Android application (remember to start a simulator or connect an Android phone)

##### Debug apk

- `yarn bundle:android` to bundle js and assets
- `cd android && ./gradlew assembleDebug` to build debug apk

- Find apk in the folder `android/app/build/outputs/apk`