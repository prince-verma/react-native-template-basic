# react-native-template-basic

Templates are used to create a project based on some fix architecture.
This is basic template provides basic folder-structure of your project and implements some reusable components/functions etc.

react-native-basic-template is kind of start-kit or seed project to init a new application.
It has dependency of react-native-vector-icons, to provide the Default icons support.
```
Note:- implemented react-navigation 2.x.
has some issues in navigationOptions for drawerNavigator. 
So, Currently we implemented a work-around solution for drawerNavigator.
```

## Usuage

```
react-native init <project-name> --template basic
react-native link
```

This will provide the basic folder structure and some resulable components that you can use in your project.
This will saves your time by providing some basic implementaion of an react-native applicaton.

It also implements some of basic login, signup, welcome screens, side drawer menu etc components that will fully covers their functionlity.

This also provides some of basic components like:-

### Icon
```
Also added the dependency of react-native-vector-icons, to provide the Default icons support.
```

#### usuage

Just import the Icon compopent and provide type of icon like "MaterialIcons"/"FontAwesome" etc., default type is "MaterialIcons".

For more information about vector icons follow link https://github.com/oblador/react-native-vector-icons.


```
import { Icon } from '../../components';


<Icon 
  type={"MaterialIcons"} 
  color="white" 
  size={26} 
  name={"archive"}/>
```

### Input

#### usuage

Just import the Input compopent and it will provide basic animated input componnet.

```
import { Input } from '../../components';


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
import { SnackBar, showSnackBar } from './src/components';

<SnackBar id={"SnackBar_Root_App"} />


// import showSnackBar function from same file and use it as

showSnackBar({
  message:"custom message", 
  position:"top", 
  duration = 2000,
  confirmText = "OK", 
  onConfirm = () => {}
});
```

### Alert
  Alerts are used to show messages in your application that must required user's interaction.
  This Alert component follow google material guidelines to show alert to user.

#### usuage

```
// provide this as last child in your root component. import the Alert from components.
import { AlertView, Alert } from './src/components';


<AlertView id={"Alert_Root_App"} />


// import Alert function from same file and use it as

Alert({
  title = "Alert-Title",
  message = "Your custom message will appear here.",
  buttons = [
    { title: "CANCEL", onPress: () => {} }, 
    { title: "OK", onPress: () => {} }]
  });
```


The folder structure that you will have is :

```
<root-of-project>
└─── android
└─── ios
└─── node_modules
└─── src
│   └─── components
│   |        index.js
│   |        reloadOnAppStateChange.js
│   |        loading.js
│   |        
│   |   └─── header
│   |   |       index.js
│   |   |       navigationHeaders.js
│   |   └─── alertView
│   |   |       index.js
│   |   └─── icon
│   |   |       index.js
│   |   └─── input
│   |   |       errorView.js
│   |   |       index.js
│   |   |       inputStyle.js
│   |   |       textInput.js
│   |   └─── snackbar
│   |   |       index.js
│   |   |   
│   └─── scenes
│   |        index.js
│   |        authStack.js
│   |        
│   |   └─── aboutUs
│   |   |       aboutUs.js
│   |   └─── drawer
│   |   |       drawer.js
│   |   |       drawerMenu.js
│   |   |       drawerSideMenu.js
│   |   └─── login
│   |   |       login.js
│   |   └─── signup
│   |   |       signup.js
│   |   └─── welcome
│   |   |       welcome.js
│   └─── styles
│   |        index.js
│   └─── utilities
│   |        api.js
│   |        constants.js
│   |        index.js
│   |        navigationService.js
│   |        storage.js
│   |        validations.js
│   
|    App.js
|    App.json
|    config.js
|    index.js
|    LICENSE
|    package.json
|    readme.md
```

## Links

github link : https://github.com/prince-verma/react-native-template-basic

npm link : https://www.npmjs.com/package/react-native-template-basic
