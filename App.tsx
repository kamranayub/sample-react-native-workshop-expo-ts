import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const spacing = {
  x1: 4,
  x2: 8,
  x4: 12,
  x5: 16,
  x6: 20,
  x10: 40,
} as const;

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colors:
        </Text>
        <Text style={[styles.box, styles.cyan]}>
          Cyan {styles.cyan.backgroundColor}
        </Text>
        <Text style={[styles.box, styles.blue]}>
          Blue {styles.blue.backgroundColor}
        </Text>
        <Text style={[styles.box, styles.magenta]}>
          Magenta {styles.magenta.backgroundColor}
        </Text>
        <Text style={[styles.box, styles.orange]}>
          Orange {styles.orange.backgroundColor}
        </Text>
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
