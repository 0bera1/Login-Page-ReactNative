# React Native Login Page with Firebase

This project is a simple login page built with Firebase Authentication using React Native. The app works on both iOS and Android platforms.

## Features

- User login with Firebase Authentication
- Error handling and user feedback
- Modern and sleek user interface

## Installation

### Requirements

- Node.js (v14 or higher)
- Expo CLI (`npm install -g expo-cli`)
- Firebase account

### Steps

**1. Clone the repository:**

```bash
   git clone https://github.com/yourusername/login-app.git
   ```

**2. Install the dependencies:**
```bash
cd login-app
npm install
```
**3.Configure Firebase settings:**

* Create a new project in Firebase.
* Enable Firebase Authentication.
* Add the firebaseConfig object to the .env file.
**4.Start the app:**
```bash
npm start
```
* To run on Android:
```bash
npm run android
```
* To run on iOS:
```bash
npm run ios
```
 **Technologies Used**
* React Native
* Firebase Authentication
* Expo
* React Navigation

# **Project Structure**

```bash
.
├── src
│   ├── components
│   │   └── Login.js
│   ├── screens
│   │   └── HomeScreen.js
│   └── firebase
│       └── firebaseConfig.js
├── App.js
└── package.json

```
# **Packages**
```bash
{
  "firebase": "^10.13.1",
  "@react-navigation/native": "^6.1.18",
  "@react-navigation/native-stack": "^6.11.0",
  "axios": "^1.7.7",
  "react-native-safe-area-context": "4.10.5",
  "react-native-screens": "3.31.1"
}
```
**License**
This project is licensed under the MIT License. See the LICENSE file for more information.




# Firebase ile React Native Login Sayfası (Tr)

Bu proje, Firebase Authentication kullanarak basit bir login sayfası oluşturan bir React Native uygulamasıdır. Uygulama hem iOS hem de Android platformlarında çalışmaktadır.

## Özellikler

- Firebase Authentication ile kullanıcı girişi
- Hata yönetimi ve kullanıcıya geri bildirim
- Modern ve şık kullanıcı arayüzü

## Kurulum

### Gereksinimler

- Node.js (v14 veya daha üstü)
- Expo CLI (`npm install -g expo-cli`)
- Firebase hesabı

### Adımlar

**1. Projeyi klonlayın:**

 ```bash
git clone https://github.com/kullaniciadiniz/login-app.git
```
**2.Gerekli bağımlılıkları yükleyin:**
```bash
cd login-app
npm install
```
**3.Firebase ayarlarını yapılandırın:**
* Firebase'de yeni bir proje oluşturun.
* Firebase Authentication'ı etkinleştirin.
* firebaseConfig objesini .env dosyasına ekleyin.

**4.Uygulamayı başlatın:**
```bash
npm start
```
*Androidde çalıştırmak için*
```bash
npm run android
```
*IOS'ta çalıştırmak için*
```bash
npm run ios
```
**Kullanılan Teknolojiler**
* React Native
* Firebase Authentication
* Expo
* React Navigation

#  **Proje Yapısı**
```bash
.
├── src
│   ├── components
│   │   └── Login.js
│   ├── screens
│   │   └── HomeScreen.js
│   └── firebase
│       └── firebaseConfig.js
├── App.js
└── package.json
```
*Paketler*
```bash
{
  "firebase": "^10.13.1",
  "@react-navigation/native": "^6.1.18",
  "@react-navigation/native-stack": "^6.11.0",
  "axios": "^1.7.7",
  "react-native-safe-area-context": "4.10.5",
  "react-native-screens": "3.31.1"
}
```
*Lisans*
Bu proje MIT lisansı ile lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakın.