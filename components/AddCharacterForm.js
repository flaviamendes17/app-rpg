import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const AddCharacterForm = ({ newCharacter, setNewCharacter, onAddCharacter }) => {
  return (
    <View style={styles.inputRow}>
      <TextInput
        mode="outlined"
        placeholder="🎭 Nome do novo personagem..."
        value={newCharacter}
        onChangeText={setNewCharacter}
        onSubmitEditing={onAddCharacter}
        style={styles.input}
        theme={{
          colors: {
            primary: '#4CAF50',
            surface: '#C8E6C9',
            onSurface: '#0D2A0F',
            outline: '#4CAF50',
          }
        }}
      />
      <Button
        mode="contained"
        onPress={onAddCharacter}
        style={styles.button}
        buttonColor="#2E7D32"
        textColor="#C8E6C9"
        icon="sword"
        compact
      >
        ⚔️
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#C8E6C9',
  },
  button: {
    borderRadius: 8,
  },
});

export default AddCharacterForm;