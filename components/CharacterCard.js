import React from 'react';
import { View } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';

const CharacterCard = ({ character, onToggleRecruit, onRemoveCharacter }) => {
  return (
    <Card
      style={{
        marginBottom: 10,
        backgroundColor: character.recruited ? '#388E3C' : '#1B5E20',
        borderColor: character.recruited ? '#4CAF50' : '#388E3C',
        borderWidth: character.recruited ? 2 : 1,
      }}
      onPress={() => onToggleRecruit(character)}
      onLongPress={() => onRemoveCharacter(character)}
    >
      <Card.Content>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text
            variant="bodyLarge"
            style={{
              flex: 1,
              color: character.recruited ? '#C8E6C9' : '#C8E6C9',
              fontWeight: character.recruited ? 'bold' : '500',
            }}
          >
            {character.name}
          </Text>
          <Text style={{ fontSize: 20, marginLeft: 10 }}>
            {character.recruited ? "⭐" : "💤"}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default CharacterCard;