import React from "react";
import StackNavigator from "./routes";
import { setTopLevelNavigator } from "../utilities";

export default class Index extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <StackNavigator ref={reff => setTopLevelNavigator(reff)} />;
  }
}
