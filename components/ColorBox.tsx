import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { spacing } from '../tokens';

interface ColorBoxProps {
  hexCode: string;
  colorName: string;
}
const ColorBox: React.FC<ColorBoxProps> = props => {
  const boxColor = {
    backgroundColor: props.hexCode,
  };

  return (
    <Text style={[styles.box, boxColor]}>
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
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 3,
  },
});
