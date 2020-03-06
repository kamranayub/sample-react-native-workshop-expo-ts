import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { spacing } from '../tokens';
import { Color } from '../color';

interface ColorBoxProps {
  hexCode: string;
  colorName: string;
}

const ColorBox: React.FC<ColorBoxProps> = props => {
  const boxColor = {
    backgroundColor: props.hexCode,
  };
  const lightness = Color.fromHex(props.hexCode).lightness();

  return (
    <Text
      style={[
        styles.box,
        boxColor,
        lightness > 0.5 ? styles.darkText : styles.lightText,
      ]}
    >
      {props.colorName} {props.hexCode}
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
  },
  darkText: {
    color: 'black',
  },
  lightText: {
    color: 'white',
  },
});
