import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import { updateAuthenticationState } from '../../redux/actions/authentication.actions';
import Input from '../../components/input';
import Icon from '../../components/icon';
import styles, { COLOR } from '../../styles';
import { LOGIN } from '../../constants';

function SignUp(props) {
  const { navigation, updateAuthenticationStateConnect } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToLogin = () => navigation.navigate(LOGIN);
  const onSignUp = () => updateAuthenticationStateConnect(true);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[{ flex: 1 }, styles.bgApp, styles.ph20]}>
        <View style={[styles.pv20]}>
          <Text style={[styles.cWhite, styles.font24]}>Welcome</Text>
        </View>

        <Text style={[styles.cWhite]}>Your email</Text>
        <Input
          type="email"
          borderBottomColor={'#FFF'}
          inputStyle={styles.cWhite}
          placeholder={'example@example.com'}
          placeholderTextColor={'rgba(255,255,255,0.5)'}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={[styles.cWhite]}>Your password</Text>
        <Input
          type="password"
          borderBottomColor={'#FFF'}
          placeholder={'Password'}
          placeholderTextColor={'rgba(255,255,255,0.5)'}
          inputStyle={[styles.cWhite]}
          value={password}
          onChangeText={setPassword}
        />

        <View style={[styles.mv10]}>
          <TouchableOpacity onPress={goToLogin}>
            <Text style={[styles.cWhite, styles.font16, styles.bold]}>have an account?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.circle50, styles.bgWhite, styles.shadow2, styles.center, { alignSelf: 'flex-end' }]}
          onPress={onSignUp}>
          <Icon name={'keyboard-arrow-right'} size={30} color={COLOR.APP} />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.object,
  updateAuthenticationStateConnect: PropTypes.func,
};

export default connect(null, {
  updateAuthenticationStateConnect: updateAuthenticationState,
})(SignUp);
