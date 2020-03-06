import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { spacing } from '../tokens';

const AddNewPaletteModal = () => {
  const [name, setName] = React.useState('');

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
    </View>
  );
};

export default AddNewPaletteModal;

const styles = StyleSheet.create({
  container: {
    padding: spacing.x4,
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: spacing.x2,
  },
});
