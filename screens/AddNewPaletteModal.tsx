import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { spacing } from '../tokens';

const AddNewPaletteModal = () => {
  const [name, setName] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>Name of the palette</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Palette name"
      />
      <TouchableOpacity style={styles.submit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
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
  inputLabel: {
    marginVertical: spacing.x2,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: spacing.x2,
    marginBottom: spacing.x6,
  },
  submit: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
