import React from "react";
import TextInput from "./textInput";

export default class Input extends React.PureComponent {
  render() {
    let { type = "text" } = this.props;
    type = type.toLowerCase();

    switch (type) {
      case "email":
        return (
          <TextInput
            placeholder={"E-mail address"}
            {...this.props}
            keyboardType={"email-address"}
          />
        );
      case "password":
        return (
          <TextInput
            placeholder={"Password"}
            {...this.props}
            keyboardType={"default"}
            secureTextEntry
          />
        );
      case "number":
        return <TextInput {...this.props} keyboardType={"numeric"} />;
      default:
      case "text":
        return <TextInput {...this.props} />;
    }
  }
}
