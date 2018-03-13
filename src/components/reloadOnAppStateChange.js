import React from "react";
import {AppState, View} from "react-native";

export default class ReloadViewOnAppStateChange extends React.PureComponent {
  constructor(p) {
    super(p);
    this.state = {
      reload: true
    }
  }
  
  componentWillMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }
  
  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }
  
  handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'active') {
      this.setState({reload: true});
    } else {
      this.setState({reload: false});
    }
  };
  
  render() {
    let {children = null} = this.props;
    
    if (this.state.reload) {
      return (
        <View style={{flex: 1}}>
          {children}
        </View>
      );
    } else {
      return (<View/>);
    }
  }
}
