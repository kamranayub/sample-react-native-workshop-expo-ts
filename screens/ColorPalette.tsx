import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import ColorBox from '../components/ColorBox';
import { spacing } from '../tokens';
import { MainStackParamList } from '../App';

interface ColorPaletteProps {
  route: RouteProp<MainStackParamList, 'ColorPalette'>;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ route }) => {
  return (
    <FlatList
      style={styles.container}
      data={route.params.colors}
      keyExtractor={color => color.colorName}
      renderItem={color => <ColorBox {...color.item} />}
    />
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    marginBottom: spacing.x2,
    fontSize: 18,
  },
  container: {
    paddingHorizontal: spacing.x4,
    paddingTop: spacing.x4,
    paddingBottom: spacing.x2,
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ColorPalette;
