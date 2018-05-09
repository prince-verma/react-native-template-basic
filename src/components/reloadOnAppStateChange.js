import React from "react";
import { AppState, View } from "react-native";

export default class ReloadViewOnAppStateChange extends React.PureComponent {
  constructor(p) {
    super(p);

    this.state = {
      reload: true
    };
  }

  componentDidMount() {
    AppState.addEventListener("change", this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this.handleAppStateChange);
  }

  handleAppStateChange = nextAppState => {
    this.setState({ reload: nextAppState === "active" });
  };

  render() {
    const { children = null } = this.props;

    if (this.state.reload) {
      return <View style={{ flex: 1 }}>{children}</View>;
    }

    return <View/>;
  }
}
