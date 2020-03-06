/* eslint-disable no-bitwise */
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { spacing } from '../tokens';

interface ColorBoxProps {
  hexCode: string;
  colorName: string;
}

function getLightnessFromHexColor(hex: string) {
  var c = hex.substring(1); // strip #
  var rgb = parseInt(c, 16); // convert rrggbb to decimal
  var r = (rgb >> 16) & 0xff; // extract red
  var g = (rgb >> 8) & 0xff; // extract green
  var b = (rgb >> 0) & 0xff; // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  return luma;
}

const ColorBox: React.FC<ColorBoxProps> = props => {
  const boxColor = {
    backgroundColor: props.hexCode,
  };
  const lightness = getLightnessFromHexColor(props.hexCode);

  return (
    <Text
      style={[
        styles.box,
        boxColor,
        lightness > 140 ? styles.darkText : styles.lightText,
      ]}
    >
      {props.colorName}: {props.hexCode}
    </Text>
  );
};

export default ColorBox;

const styles = StyleSheet.create({
  box: {
    padding: spacing.x2,
    marginBottom: spacing.x2,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  darkText: {
    color: 'black',
  },
  lightText: {
    color: 'white',
  },
});
