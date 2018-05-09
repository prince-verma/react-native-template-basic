import React from "react";
import { getResetAction, Storage } from "../utilities";
import { Loading } from "../components";

export default class Welcome extends React.Component {
  async componentDidMount() {
    try {
      const { navigation } = this.props;
      const user = await Storage.get("user");

      if (user) {
        navigation.dispatch(getResetAction("Welcome"));
      } else {
        navigation.dispatch(getResetAction("Welcome"));
      }
    } catch (err) {
    }
  }

  render() {
    return <Loading/>;
  }
}
