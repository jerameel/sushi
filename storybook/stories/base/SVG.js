import React from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Text from '../../../src/components/base/Text';
import {
  /* PLOP_INJECT_IMPORT */
  Edit,
  Close,
  Settings,
  Delete,
  UpDown,
  DownLeft,
  UpRight,
  Down,
  Back,
  Add,
} from '../../../src/components/base/SVG';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, flexDirection: 'row', flexWrap: 'wrap' },
  wrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 8,
    width: 64,
    height: 64,
  },
  text: {
    color: '#000',
    marginTop: 5,
  },
});

const SVGWrapper = ({ children, label }) => {
  return (
    <View style={styles.wrapper}>
      {children}
      <Text variant="caption" style={styles.text}>
        {label}
      </Text>
    </View>
  );
};

storiesOf('base/SVGs', module).add('Summary', () => (
  <View style={styles.container}>
    {/* PLOP_INJECT_INSTANCE*/}
    <SVGWrapper label="Edit">
      <Edit fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Close">
      <Close fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Settings">
      <Settings fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Delete">
      <Delete fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="UpDown">
      <UpDown fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="DownLeft">
      <DownLeft fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="UpRight">
      <UpRight fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Down">
      <Down fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Back">
      <Back fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Add">
      <Add fill="#000" />
    </SVGWrapper>
  </View>
));
