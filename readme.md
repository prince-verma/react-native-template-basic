# react-native-template-basic

Templates are used to create a project based on some fix architecture.
This is basic template provides basic folder-structure of your project and implemented reusable components.

## Usuage
```
react-native init <project-name> --template basic
``` 

This will provide the basic folder structure and some resulable components that you can use in your project.
This will saves your time by providing some basic implementaion of an react-native applicaton.

The folder structure that you will have is :
```
root:
  android
  ios
  node_modules
  src:
    components:
      alertView
        index.js
      input
        errorView.js
        index.js
        inputStyle.js
        textInput.js
      snackbar
        index.js
      index.js
      reloadOnAppStateChange.js
    scenes:
      aboutUs
        aboutUs.js
      drawer:
        drawer.js
        drawerMenu.js
        drawerSideMenu.js
      login:
        login.js
      signup:
        signup.js
      welcome:
        welcome.js
      index.js
      manin.js
      routes.js
    styles:
      index.js
    utilities:
      api.js
      index.js
      navigationService.js
      storage.js
      validations.js
  App.js
  App.json
  config.js
  index.js
  LICENSE
  package.json
  readme.md
```

## Links
github link : https://github.com/prince-verma/react-native-template-basic

npm link : https://www.npmjs.com/package/react-native-template-basic