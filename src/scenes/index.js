import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Alert } from "../components";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This is template Project</Text>
        <TouchableOpacity
          onPress={() => {
            Alert({
              title: "Title",
              message: "Your cutom message will stay here.",
              buttons: [{ title: "Ok" }]
            });
          }}
        >
          <View>
            <Text>Show Alert</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
