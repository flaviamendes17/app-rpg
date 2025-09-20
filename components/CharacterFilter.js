import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

const CharacterFilter = ({ filter, onFilterChange }) => {
  return (
    <View style={styles.container}>
      <SegmentedButtons
        value={filter}
        onValueChange={onFilterChange}
        buttons={[
          {
            value: 'all',
            label: 'Todos',
            icon: 'account-group',
            style: { backgroundColor: filter === 'all' ? '#4CAF50' : '#1B5E20' },
            labelStyle: { color: filter === 'all' ? '#0D2A0F' : '#C8E6C9' },
          },
          {
            value: 'recruited',
            label: 'Recrutados',
            icon: 'star',
            style: { backgroundColor: filter === 'recruited' ? '#4CAF50' : '#1B5E20' },
            labelStyle: { color: filter === 'recruited' ? '#0D2A0F' : '#C8E6C9' },
          },
          {
            value: 'available',
            label: 'Disponíveis',
            icon: 'sleep',
            style: { backgroundColor: filter === 'available' ? '#4CAF50' : '#1B5E20' },
            labelStyle: { color: filter === 'available' ? '#0D2A0F' : '#C8E6C9' },
          },
        ]}
        theme={{
          colors: {
            primary: '#4CAF50',
            surface: '#1B5E20',
            outline: '#388E3C',
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default CharacterFilter;