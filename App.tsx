import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { spacing } from './tokens';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colors:
        </Text>
        <ColorBox hexCode={styles.cyan.backgroundColor} colorName="Cyan" />
        <ColorBox hexCode={styles.blue.backgroundColor} colorName="Blue" />
        <ColorBox
          hexCode={styles.magenta.backgroundColor}
          colorName="Magenta"
        />
        <ColorBox hexCode={styles.orange.backgroundColor} colorName="Orange" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    marginBottom: spacing.x2,
    fontSize: 18,
  },
  cyan: { backgroundColor: '#2aa198' },
  blue: { backgroundColor: '#268bd5' },
  magenta: { backgroundColor: '#d33682' },
  orange: { backgroundColor: '#cb4b16' },
  safeArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: spacing.x4,
    paddingTop: spacing.x10,
    paddingBottom: spacing.x2,
    alignItems: 'stretch',
    flex: 1,
  },
});

export default App;
