## 🛠 Unity Configuration

To ensure the Unity-React Native bridge works correctly, verify the following environment settings:

| Component | Required Version |
| :--- | :--- |
| **Unity Version** | `6.0 (60000.0.59f2)` |
| **Android NDK** | `27.2.12479018` |

### 📥 Asset Setup
1. **Download:** Access the Unity build files via [Google Drive](https://drive.google.com/drive/folders/1hGMcdb8c8IzW-4CuBvo3nCh7ZQQKzSEs?usp=sharing).
2. **Extract:** Place all files into the specific directory:
   > `HelloWorldApp/unity/builds`

---

## 📡 Unity Bridge API

These commands allow communication from **React Native** to the **Unity** view.

**Target GameObject:** `ReactBridge`  
**Target Method:** `ReceiveMessageFromRN`

| Message String | Functionality |
| :--- | :--- |
| `"ShowKerisA"` | Shows/Activates Keris Model A |
| `"ShowKerisB"` | Shows/Activates Keris Model B |
| `"ToggleHotspot"` | Toggles visibility of interactive hotspots |

### Usage Example
```javascript
// Calling from React Native
unityRef.current.postMessage('ReactBridge', 'ReceiveMessageFromRN', "ShowKerisA");
```

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

: Chat with Expo users and ask questions.





