# react-native-template-basic

Templates are used to create a project based on some fix architecture.
This is basic template provides basic folder-structure of your project and implements some reusable components/functions etc.

react-native-basic-template is kind of start-kit or seed project to init a new application.

## Usuage

```
react-native init <project-name> --template basic
```

This will provide the basic folder structure and some resulable components that you can use in your project.
This will saves your time by providing some basic implementaion of an react-native applicaton.

It also implements some of basic login, signup, welcome screens, side drawer menu etc components that will fully covers their functionlity.

This also provides some of basic components like:-

### Input

#### usuage

Just import the Input compopent and it will provide basic animated input componnet.

```
<Input
  type="email"
  borderBottomColor={"#FFF"}
  inputStyle={{color:"white"}}
  placeholder={"example@example.com"}
  placeholderTextColor={"rgba(255,255,255,0.5)"}
  onChangeText={text => { this.state.email = text; }}
/>


<Input
  type="password"
  borderBottomColor={"#FFF"}
  placeholder={"Password"}
  placeholderTextColor={"rgba(255,255,255,0.5)"}
  inputStyle={[styles.cWhite]}
  onChangeText={text => { this.state.password = text; }}
/>
```

### Snackbar
  Snackbar are used to display some short messages in your application for a short duration of time.

#### usuage

```
// provide this as last child in your root component. import the snackbar from components.

<SnackBar id={"SnackBar_Root_App"} />

// import showSnackBar function from same file and use it as

showSnackBar({message:"custom message", position:"top", duration = 2000,confirmText = "OK", onConfirm = () => {}});
```

### Alert
  Alerts are used to show messages in your application that must required user's interaction.
  This Alert component follow google material guidelines to show alert to user.

#### usuage

```
// provide this as last child in your root component. import the Alert from components.

<AlertView id={"Alert_Root_App"} />

// import Alert function from same file and use it as

Alert({
  title = "Alert-Title",
  message = "Your custom message will appear here.",
  buttons = [{ title: "CANCEL", onPress: () => {} }, { title: "OK", onPress: () => {} }]
  });
```



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
      mani.js
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
