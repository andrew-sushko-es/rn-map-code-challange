## Directory Structure

- [`src/components`](src/components): common presentational components.
- [`src/navigation`](src/navigation): [react native navigation](https://reactnavigation.org/) components and routes names constants.
- [`src/screens`](src/screens): application screens.
- [`src/theme`](src/theme): colors and other common styles props.
- [`src/utils`](src/utils): common javascript functions.
- [`.env`](.env): file with app configuration constants. [More information](https://github.com/goatandsheep/react-native-dotenv).

## Single component(screen or common component) folder structure

- `index.js`: root component file.
- `styled.js`: styles for component in current directory made with [styled-components](https://styled-components.com/).
  - `ChildComponent`
    - `index.js`
    - `styled.js`

## .env variables

- `USE_IOS_NATIVE_MAP`: 1(true)/0(false) - add possibility to change GoogleMaps to native IOS maps for IOS devices

## Running the project(Android)

- rename `.env_example` to `.env`
- `yarn install` to install the dependencies
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn android` to run the Android application (remember to start a simulator or connect an Android phone)

## Running the project(IOS)

- rename `.env_example` to `.env`
- `cd ios`
- `pod install` to install pod dependencies
- `cd ..` to come back to the root folder
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn ios` to run the IOS application (remember to start a simulator or connect an iPhone phone)
