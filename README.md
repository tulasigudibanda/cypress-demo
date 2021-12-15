# FireStarter

Firestarter is an Angular PWA powered by Firebase.

- [Live Demo](https://firestarter.fireship.io/)
- [Lessons and Screencasts](https://fireship.io)
- [Join the Slack Team](https://fireship.page.link/slack)

![](https://firebasestorage.googleapis.com/v0/b/angular-voxer.appspot.com/o/demo-gif.gif?alt=media&token=dadcdb72-eb58-4903-b6b8-c741c27a08c4)

## Features

- Angular 12.x + Firebase
- Installable PWA
- OAuth and Email/Password Signup with Firebase
- Drag & drop Kanban demo with Firestore
- Angular Universal SSR with Nest.js deployed to Google Cloud Run
- Optional SSR Prerendering Script

## Usage

1.  Run

- `git clone https://github.com/codediodeio/angular-firestarter.git firestarter`
- `cd firestarter`
- `npm install`

2.  Create a project at https://firebase.google.com/ and grab your web config:

![](https://firebasestorage.googleapis.com/v0/b/firestarter-96e46.appspot.com/o/project-config.PNG?alt=media&token=5eabb205-7ba2-4fc3-905f-e9547055e754)

3.  Add the config to your Angular environment

#### src/environments/

Update the `environment.prod.ts` and `environment.ts` files. 

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'APIKEY',
    authDomain: 'DEV-APP.firebaseapp.com',
    databaseURL: 'https://DEV-APP.firebaseio.com',
    projectId: 'DEV-APP',
    storageBucket: 'DEV-APP.appspot.com',
    messagingSenderId: '...',
    appId: '...',
  }
};
```


5.  Run `ng serve`


### Running Cypress

- cd /your/project/path
- Run `npm install`
- Run `npm install cypress --save-dev`
- Run `npm install chance --save-dev`			// library to generate random fixtures for the tests (randomization of data/variables)

Change the e2e target in package.json as below :
- `e2e: "cypress open"`

- Run `npm run e2e`

Running above step creates the following file and dir:
- src/cypress.json -  global configuration options
- Cypress/fixtures - has default data that can be used in the tests
- Cypress/integration - write e2e tests  (example : sample.spec.js)
- Cypress/plugins - write plugins that can hook into different life cycle events in the testing process (ex: for logging , for transpiling if we write tests in ts
- Cypress/support - to write custom/reusable commands that can overwrite the existing commands

**** Cypress/integration dir : Directory to write e2e testcases ****

Documentation :
- https://www.cypress.io/
- https://docs.cypress.io/guides/overview/why-cypress

Cypress Setup Ref: 
- https://www.youtube.com/watch?v=7N63cMKosIE
