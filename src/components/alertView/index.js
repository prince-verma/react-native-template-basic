import React from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import Events from 'react-native-simple-events';
import { height, isFunction, width } from '../../utilities';

const defaultButtons = [{
  title: 'CANCEL', onPress: () => {
  }
}, {
  title: 'OK', onPress: () => {
  }
}];

export function Alert(data = {}) {
  let {
    title = 'Alert-Title',
    message = 'Your custom message will appear here.',
    buttons = defaultButtons,
    ...otherProps
  } = data;

  Events.trigger('showAlert', { message, title, buttons, ...otherProps });
}

export class AlertView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closeOnTouchOutside: props.closeOnTouchOutside,
      title: 'Alert',
      message: 'Your custom message',
      buttons: defaultButtons,
      show: false
    };
  }

  componentDidMount() {
    let { id = null } = this.props;
    Events.on('showAlert', id ? id : '123456789', this.onRequest);
  }

  componentWillUnmount() {
    let { id = null } = this.props;
    Events.remove('showAlert', id ? id : '123456789');
  }

  onRequest = options => {
    let { message, title, show = true, buttons = [], ...other } = options;

    if (message) {
      this.setState({ title, message, buttons, show, ...other });
    }
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { backgroundColor, animationType } = this.props;
    const { title, message, buttons, show, closeOnTouchOutside = false } = this.state;

    return (
      <Modal transparent visible={show} animationType={animationType || 'fade'} onRequestClose={this.closeModal}>
        <TouchableWithoutFeedback
          onPress={() => {
            closeOnTouchOutside && this.closeModal();
          }}
        >
          <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.alertBoxContainer}>
              <View style={{ padding: 24 }}>
                {/* -------------------------- Title --------------------------------- */}
                <View style={{ marginBottom: 20 }}>
                  <Text style={styles.title}>{title}</Text>
                </View>

                {/* -------------------------- message --------------------------------- */}
                <View>
                  <Text style={styles.message}>{message}</Text>
                </View>
              </View>

              {/* -------------------------- Actions --------------------------------- */}
              <View style={styles.buttonsContainer}>
                {buttons.map((button, index) => (
                  <TouchableHighlight
                    key={index}
                    style={styles.buttonStyle}
                    underlayColor={'#e6e6e6'}
                    onPress={() => {
                      this.closeModal();
                      isFunction(button.onPress) && button.onPress();
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>{button.title}</Text>
                    </View>
                  </TouchableHighlight>
                ))}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  alertBoxContainer: {
    elevation: 24,
    shadowOffset: { height: 12, width: 0 },
    shadowRadius: 12,
    shadowOpacity: 0.3,
    padding: 0,
    marginHorizontal: 40,
    backgroundColor: '#FFFFFF'
  },
  title: {
    color: '#1f1f1f',
    fontSize: 20
  },
  message: {
    color: '#9b9b9b',
    fontSize: 16,
    lineHeight: 24
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 52,
    paddingVertical: 8,
    marginLeft: 24,
    marginRight: 8
  },
  buttonStyle: {
    height: 36,
    minWidth: 64,
    paddingHorizontal: 8,
    justifyContent: 'center',
    marginRight: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#03a9f4',
    fontSize: 14
  }
});
