# react-native-template-basic

Templates are used to create a project based on some fix architecture.
This is basic template provides basic folder-structure of your project and implements some reusable components/functions etc.

react-native-basic-template is kind of start-kit or seed project to init a new application.
It has dependency of react-native-vector-icons, to provide the Default icons support.

## Usage and setup

```
react-native init <project-name> --template basic
react-native link
```
or 
```
npx react-native init <project-name> --template basic
```
Now we are using `react-navigation@5.x`, so we have to follow some additional steps for Android setup. 

 - We are using `react-native-gesture-handler`, so to finalise installation of `react-native-gesture-handler` for Android, be sure to make the necessary modifications to MainActivity.java:
```diff
import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```

 - We are using `react-native-screens`, so we need to modify `MainActivity.java` class to extend [`ReactFragmentActivity`](https://github.com/facebook/react-native/blob/0.57-stable/ReactAndroid/src/main/java/com/facebook/react/ReactFragmentActivity.java).
```diff
-import com.facebook.react.ReactActivity;
+import android.os.Bundle;
+import com.facebook.react.ReactFragmentActivity;
 import com.facebook.react.ReactActivityDelegate;

-public class MainActivity extends ReactActivity {
+public class MainActivity extends ReactFragmentActivity {
+
+    @Override
+    protected void onCreate(Bundle savedInstanceState) {
+        super.onCreate(null);
+    }

     @Override
     protected String getMainComponentName() {
```
In case you have any problem in this please refer `react-native-screens (https://github.com/kmagiera/react-native-screens)`


#### `react-native-gesture-handler`/`react-native-screens` isn't working on Android
```
As we are using react-native-gesture-handler and react-native-screens in this template, so may be you can have an issue with 'react-native run-android', the project can't be builded.
```
You will have error like `Task :react-native-gesture-handler:compileDebugJavaWithJavac FAILED`.
<br/>
This tells that, your RN project is configured to use AndroidX, but some of your dependencies like like react-native-gesture-handler are configured with AndroidX.
<br/>
To fix this issue follow these steps:

 - Install Jetifier `npm install --save-dev jetifier` or `yarn add -D jetifier`
 - Edit your package.json and add a postinstall script: `"postinstall": "npx jetify"` like so:
```
    "scripts": {
        ......
        "postinstall": "npx jetify"
    }    
```
 - Run `npm install` or `yarn`
 - At the end of install you should see something like:
 ```
    $ npx jetify
    Jetifier found N file(s) to forward-jetify. Using X workers...`. This means it's working. The project should compile fine now.
```

See: `https://github.com/mikehardy/jetifier` for more information.


### react-native-template-basic

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
import Icon from '../../components/icon';


<Icon 
  type={"MaterialIcons"} 
  color="white" 
  size={26} 
  name={"archive"}/>
```

### Input

#### usage

Just import the Input component and it will provide basic animated input componnet.

```
import Input from '../../components/input';


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
  For more information about snackbar follow link https://www.npmjs.com/package/react-native-swipeable-snackbar.
    
#### usuage

```
// provide this as last child in your root component. import the snackbar from components.
import SnackBar from 'react-native-swipeable-snackbar';

// we can specify default-position of the Snackbar here
// and provide a top default top margin
<SnackBar id={"SnackBar_Root_App"} position={'top'} marginFromTop={30}/>


// import showSnackBar function from same file and use it as
import { showSnackBar } from 'react-native-swipeable-snackbar';

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
import { AlertView, Alert } from './src/components/alert';


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
│   └─── api
│   |        index.js
│   └─── components
│   |        reloadOnAppStateChange.js
│   |        loading.js
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
│   └─── constans
│   |        index.js
│   |        screenNameContants.js
│   └─── redux
│   |   └─── actions
│   |   |       authentication.actions.js
│   |   |       sideMenu.actions.js
│   |   |       viewport.actions.js
│   |   └─── reducers
│   |   |       authentication.reducer.js
│   |   |       index.js
│   |   |       sideMenu.reducer.js
│   |   |       viewport.reducer.js
│   |        reduxConstants.js
│   |        store.js
│   └─── scenes
│   |   └─── aboutUs
│   |   |       aboutUs.js
│   |   └─── drawer
│   |   |       index.js
│   |   |       drawerMenu.js
│   |   |       drawerSideMenu.js
│   |   └─── login
│   |   |       index.js
│   |   └─── profile
│   |   |       index.js
│   |   └─── signup
│   |   |       index.js
│   |   └─── welcome
│   |   |       index.js
│   |        index.js
│   └─── styles
│   |        index.js
│   └─── utilities
│   |        api.js
│   |        index.js
│   |        navigationService.js
│   |        storage.js
│   |        validations.js
|
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
