import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { spacing } from '../tokens';
import PalettePreview from '../components/PalettePreview';

interface ColorPalette {
  id: number;
  paletteName: string;
  colors: { colorName: string; hexCode: string }[];
}

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = React.useState<ColorPalette[]>([]);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  const fetchColorPalettes = React.useCallback(async () => {
    setRefreshing(true);

    const res = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    setRefreshing(false);

    if (res.ok) {
      const json = (await res.json()) as ColorPalette[];
      setPalettes(json);
    }
  }, [setPalettes, setRefreshing]);

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  return (
    <View style={styles.container}>
      <FlatList
        refreshing={refreshing}
        onRefresh={fetchColorPalettes}
        keyExtractor={item => item.paletteName}
        data={palettes}
        renderItem={palette => (
          <PalettePreview
            handlePress={() => {
              navigation.navigate('ColorPalette', palette.item);
            }}
            palette={palette.item}
          />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.x4,
    paddingTop: spacing.x4,
    paddingBottom: spacing.x2,
    flex: 1,
    backgroundColor: 'white',
  },
});
