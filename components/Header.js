import React from 'react';
import { View } from 'react-native';
import { Title, Caption } from 'react-native-paper';

const Header = () => {
  return (
    <View style={{ marginBottom: 20, alignItems: 'center' }}>
      <Title style={{ color: '#4CAF50', fontSize: 28, fontWeight: 'bold' }}>
        🏰 Minha Party RPG
      </Title>
      <Caption style={{ color: '#2E7D32', fontSize: 12 }}>
        ⭐ Recrutado • 💤 Disponível • Segure para remover
      </Caption>
    </View>
  );
};

export default Header;