import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import PalettePreview from '../components/PalettePreview';
import { spacing } from '../tokens';
import { ColorPalette } from '../types';
import { RootStackParamList } from '../App';

interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const Home = ({ navigation }: HomeProps) => {
  const [palettes, setPalettes] = React.useState<ColorPalette[]>([]);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  const fetchColorPalettes = React.useCallback(async () => {
    const res = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    if (res.ok) {
      const json = (await res.json()) as ColorPalette[];
      setPalettes(json);
    }
  }, [setPalettes]);

  const handleRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await fetchColorPalettes();
    setRefreshing(false);
  }, [setRefreshing, fetchColorPalettes]);

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  return (
    <View style={styles.container}>
      <FlatList
        refreshing={refreshing}
        onRefresh={handleRefresh}
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
