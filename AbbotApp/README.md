# Project Estimator Mobile App for Abbott Construction

Before using this app, you must accept the privacy policy.

This application from Abbott Construction helps provide cost estimates to clients in a short period of time.

## Configuration

### Development Environment

Ensure that you have the Expo app installed on your phone of choice for development.

To launch the app execute `npm start` or `expo start` in the project directory. This app is built using the Expo framework, and upon executing the start script, Expo will launch a web browser page where you can scan a QR code to launch the project through the Expo phone app.

You can scan this QR code using the camera app on iOS or via the Expo app on Android.

In the web page started by Expo, you can choose your connection type. Use _tunnel_ if your phone is on seperate network than your dev environment or use LAN if they are on the same network.

Once you scan the QR code, your phone will prompt you to open the Expo app and from there wait for the project to finish compiling & bundling, then the app will launch.

If you are inactive for a period of time, the Expo app may disable hot reloading upon code change, so you will need to shake your phone and run a manual reload of the app to get the most recent code.

You can use an iOS or Android emulator on your dev computer as well.

## Developer Notes

### Required/Minimum Prerequisites
- Node (12.18.0 LTS recommended as of 6/2/2020)
- Data connection if using the backend-enabled version of the app

### .env configuration
In order to run the backend enabled app, you must create an (untracked) file called `.env`, which contains the line `API_BASE_URL=http://localhost:5000/`. Change the API_BASE_URL setting to the address of the backend server, which may be hosted locally or externally hosted in the cloud. You can use an IP address or an actual domain, the port is required if it's not on port 80 for http or 443 for https. Additionally, an _ending slash is required_.

This file MUST be located in the root of the project folder in order to work.

### .env.production configuration

The `.env.production` file should be updated to reflect the officially hosted backend API address and is a tracked file on Git.

### Build a Release

#### Configure app.json
```JSON
{
   "expo": {
    "name": "Your App Name",
    "icon": "./path/to/your/app-icon.png",
    "version": "1.0.0",
    "slug": "your-app-slug",
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourappname",
      "buildNumber": "1.0.0"
    },
    "android": {
      "package": "com.yourcompany.yourappname",
      "versionCode": 1
    }
   }
 }
```

#### Start the build
Run `expo build:android` or `expo build:ios`

#### Start the upload
Run `expo upload:android` or `expo upload:ios`

Options:
`--latest` - uploads the latest build for the given platform found on Expo Servers
`--url <url>` - uploads a build from given URL
`--path <path>` - uploads a build from the local file system
`--id <id>` - uploads a build with the given ID

For further information, refer to [Uploading Apps to the Apple App Store and Google Play](https://docs.expo.io/distribution/uploading-apps/).
