import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({ inputValue, onChangeText, onDoneAddList }) => (
  <TextInput
    style={styles.input}
    value={inputValue}
    onChangeText={onChangeText}
    placeholder="Add an list!"
    placeholderTextColor={'#f1a895'}
    multiline={true}
    autoCapitalize="sentences"
    underlineColorAndroid="#FBF6F3"
    selectionColor={'#FBF6F3'}
    maxLength={30}
    returnKeyType="done"
    autoCorrect={false}
    blurOnSubmit={true}
    onSubmitEditing={onDoneAddList}
  />
);
const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 34,
    color: 'white',
    fontWeight: '500'
  }
});

export default Input;
