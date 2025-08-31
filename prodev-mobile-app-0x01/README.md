# Prodev Mobile App 0x00

This is my first mobile app built with React Native and Expo.  
It displays a simple Home screen with a welcome message.


# prodev-mobile-app-0x00 — First Expo Router App

## Scaffolding Steps
1. Open terminal and navigate to project directory:
   ```bash
   cd prodev-mobile-setup/prodev-mobile-app-0x00

Scaffold app using Expo Router:

npx create-expo-app@latest .      # choose Router template (TypeScript recommended)


Edited home screen file app/(tabs)/index.tsx (or app/page.tsx / app/index.tsx if router created different structure).

Changed <Text>Welcome!</Text> to <Text>** First App Created**</Text>.

Running the app

Start the development server:

npx expo start


Scan the QR code with Expo Go (Android) or Camera/Expo Go (iOS).

Reset command

Added script: npm run reset-project (runs scripts/reset-project.js).

Observations:

Removes node_modules, .expo, lock files and reinstalls dependencies.

Source files remain unchanged.

Useful to recover from corrupted installs or caches.

Files of interest

app/(tabs)/index.tsx — Home screen modified.

scripts/reset-project.js — Reset helper script.

README.md — This documentation.


---

# 8) Commit and push to GitHub
If your repo is already initialized and connected to remote:

```powershell
git add .
git commit -m "feat: scaffold expo-router app and update home screen; add reset script and README"
git push origin main   # or the branch you use


---

# 8) Commit and push to GitHub
If your repo is already initialized and connected to remote:

```powershell
git add .
git commit -m "feat: scaffold expo-router app and update home screen; add reset script and README"
git push origin main   # or the branch you use


# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
