import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

import Input from '../../components/input';
import Icon from '../../components/icon';
import styles, { COLOR } from '../../styles';
import { updateAuthenticationState } from '../../redux/actions/authentication.actions';

function Login(props) {
  const { updateAuthenticationStateConnect } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => updateAuthenticationStateConnect(true);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.f1, styles.bgApp, styles.ph20]}>
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
          <TouchableOpacity onPress={() => {
          }}>
            <Text style={[styles.cWhite, styles.font16, styles.bold]}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.circle50, styles.bgWhite, styles.shadow2, styles.center, { alignSelf: 'flex-end' }]}
          onPress={onLogin}
        >
          <Icon name={'keyboard-arrow-right'} size={30} color={COLOR.APP} />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

Login.propTypes = {
  updateAuthenticationStateConnect: PropTypes.func,
};

export default connect(null, {
  updateAuthenticationStateConnect: updateAuthenticationState,
})(Login);
