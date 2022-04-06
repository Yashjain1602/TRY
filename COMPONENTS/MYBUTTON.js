import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet} from 'react-native';
import React from "react";

export default function MYBUTTON(props) {
  let { action, title } = props;
  return <button onClick={action}>{title}</button>;
}
{/*
export default function MYBUTTON() {
  return (
    <Button style={{fontSize: 20, color: 'green'}} title="LOGIN">
      SUBMIT
    </Button>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    width: '100%',
    backgroundColor: '#a0522d',
    margin: 10,
  },
});*/}