# Dome - IoT Device Management App (Front-end)

![Dome Logo](https://github.com/matiasafur/dome-front/blob/master/assets/DOME-logo.png)

## Overview

**Dome** is a cutting-edge application designed to manage and control IoT devices seamlessly. Built with Node.js, React Native, Expo, and Apollo Client, Dome offers a robust and intuitive interface for users to interact with their smart devices.

**Note**: This project is still in development. The back-end repository can be found separately.

## Features

- **Real-time Device Monitoring**: View the status of your IoT devices in real-time.
- **Control Devices**: Turn devices on/off, adjust settings, and manage configurations directly from the app.
- **User-friendly Interface**: An intuitive design that makes it easy to navigate and control your devices.
- **Secure Connection**: Ensures that all communications between the app and devices are secure.

## Screenshots

### Main Screen
![Main Screen](https://github.com/matiasafur/dome-front/blob/master/assets/home-screen.jpeg)

## Technology Stack

- **Front-end**: 
  - [React Native](https://reactnative.dev/)
  - [Expo](https://expo.dev/)
  - [Apollo Client](https://www.apollographql.com/docs/react/)
  - [JWT](https://jwt.io/)
  - [React Navigation](https://reactnavigation.org/)
  - [GraphQL](https://graphql.org/)
  - [Formik](https://formik.org/)

- **Back-end**:
  - This repository only includes the front-end code. The back-end repository can be found [here](https://github.com/matiasafur/dome-back).

## Dependencies

Here are the main dependencies used in the project:

- **@apollo/client**: ^3.10.4
- **@expo/vector-icons**: ^14.0.2
- **@react-navigation/bottom-tabs**: ^6.5.20
- **@react-navigation/native**: ^6.1.17
- **@react-navigation/native-stack**: ^6.9.26
- **expo**: ^51.0.8
- **expo-secure-store**: ~13.0.1
- **expo-status-bar**: ~1.12.1
- **formik**: ^2.4.6
- **graphql**: ^15.8.0
- **react**: 18.2.0
- **react-native**: 0.74.1
- **react-native-dotenv**: ^3.4.11
- **react-native-safe-area-context**: 4.10.1
- **react-native-screens**: 3.31.1
- **yup**: ^1.4.0

### Dev Dependencies

- **@babel/core**: ^7.20.0

## Installation

Follow these steps to get the app up and running on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/matiasafur/dome-front.git
   cd dome-frontend
   ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

4. **Run the app**:
    Open your preferred emulator (iOS/Android) or use Expo Go on your physical device to run the app.
    ```bash
    npx expo start
    ```
## License

This project is licensed under the MIT License - see the LICENSE file for details.
