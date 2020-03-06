import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface PalettePreviewProps {
  handlePress: () => void;
  palette: {
    paletteName: string;
    colors: { colorName: string; hexCode: string }[];
  };
}

const ColorSwatch = ({ hexCode }) => {
  const swatch = {
    backgroundColor: hexCode,
  };
  return <View style={[styles.swatch, swatch]} />;
};

const PalettePreview = ({ handlePress, palette }: PalettePreviewProps) => (
  <TouchableOpacity onPress={handlePress}>
    <View>
      <Text style={styles.itemHeader}>{palette.paletteName}</Text>
      <FlatList
        horizontal
        keyExtractor={item => item.colorName}
        data={palette.colors.slice(0, 5)}
        renderItem={data => <ColorSwatch {...data.item} />}
      />
    </View>
  </TouchableOpacity>
);

export default PalettePreview;

const styles = StyleSheet.create({
  itemHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  swatch: {
    width: 30,
    height: 30,
    marginRight: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});
