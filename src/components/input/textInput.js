import React from "react";
import { Animated, TextInput, View } from "react-native";
import Error from "./errorView";
import styles from "./inputStyle";

export default class Input extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: 300,
      initialWidth: 0,
      height: 50,
      borderBottomHeight: 1,
      animatedBorderHeight: 2,
      borderBottomColor: "#c9c9c9",
      animatedBorderColor: "#b9b9b9",
      animationTime: 200,
      value: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.state.value.setValue(0.0001);
  }

  _onFocus = () => {
    let { width, borderBottomColor, onFocus } = this.props;
    width = width || this.state.width;

    this.setState({ initialWidth: 1 });
    this.state.value.setValue(0.0001);
    this.setState({ borderBottomColor: borderBottomColor || "#c9c9c9" });

    Animated.timing(this.state.value, {
      toValue: width,
      duration: this.state.animationTime
    }).start();

    onFocus && onFocus();
  };

  _onBLur = () => {
    let { width, borderBottomColor, onBlur } = this.props;
    width = width || this.state.width;

    this.state.value.setValue(width);
    Animated.timing(this.state.value, {
      toValue: 0.0001,
      duration: this.state.animationTime
    }).start();
    setTimeout(() => {
      this.setState({
        borderBottomColor: borderBottomColor || "#c9c9c9",
        initialWidth: 0
      });
    }, this.state.animationTime);

    onBlur && onBlur();
  };

  render() {
    let {
      width,
      height,
      value,
      borderBottomHeight,
      borderBottomColor,
      animatedBorderHeight,
      animatedBorderColor,
      inputStyle,
      errorMessage,
      errorTextStyle,
      errorIcon,
      errorIconSize,
      errorIconColor,
      ...otherProps
    } = this.props;
    errorMessage = errorMessage ? errorMessage : "";
    inputStyle = inputStyle ? inputStyle : {};
    width = width || this.state.width;
    height = height || this.state.height;
    animatedBorderHeight = animatedBorderHeight || this.state.animatedBorderHeight;
    animatedBorderColor = animatedBorderColor || this.state.animatedBorderColor;
    borderBottomHeight = borderBottomHeight || this.state.borderBottomHeight;
    borderBottomColor = borderBottomColor || this.state.borderBottomColor;

    borderBottomColor = errorMessage ? "#D50000" : borderBottomColor;
    animatedBorderColor = errorMessage ? "#D50000" : animatedBorderColor;

    return (
      <View style={{ alignItems: "center" }}>
        <View style={{ alignItems: "center" }}>
          <TextInput
            underlineColorAndroid={"transparent"}
            style={[{ width, height }, styles.textInput, inputStyle]}
            {...otherProps}
            onFocus={this._onFocus}
            onBlur={this._onBLur}
            value={value}
          />
          <View
            style={{
              width,
              height: borderBottomHeight,
              backgroundColor: borderBottomColor,
              position: "absolute",
              bottom: 8
            }}
          />
          <Animated.View
            style={{
              width: this.state.initialWidth,
              height: animatedBorderHeight,
              position: "absolute",
              bottom: 8,
              backgroundColor: animatedBorderColor,
              transform: [{ scaleX: this.state.value }]
            }}
          />
        </View>
        <Error
          width={width}
          errorMessage={errorMessage}
          errorTextStyle={errorTextStyle}
          errorIcon={errorIcon}
          errorIconSize={errorIconSize}
          errorIconColor={errorIconColor}
        />
      </View>
    );
  }
}
