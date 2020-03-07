import React, { useEffect } from 'react';
import {
  Button,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import PalettePreview from '../components/PalettePreview';
import { spacing } from '../tokens';
import { ColorPalette } from '../types';
import { RootStackParamList, MainStackParamList } from '../App';

interface HomeProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<RootStackParamList>,
    StackNavigationProp<MainStackParamList, 'Home'>
  >;
  route: RouteProp<MainStackParamList, 'Home'>;
}

const Home = ({ navigation, route }: HomeProps) => {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
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

  useEffect(() => {
    if (newColorPalette) {
      setPalettes(prevPalettes => [newColorPalette, ...prevPalettes]);
    }
  }, [newColorPalette, setPalettes]);

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
        ListHeaderComponent={
          <View style={styles.addButton}>
            <Button
              title="Add color scheme"
              onPress={() => navigation.navigate('ColorPaletteModal')}
            />
          </View>
        }
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
  addButton: {
    marginBottom: spacing.x2,
  },
});
