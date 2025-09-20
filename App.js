import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from 'react-native-paper';
import * as SQLite from "expo-sqlite";

// Componentes
import {
  Header,
  AddCharacterForm,
  CharacterCard,
  ConfirmationModal,
  FeedbackSnackbar,
  CharacterFilter
} from './components';

// Tema
import theme from './theme';

export default function App() {
  const [db, setDb] = useState(null);
  const [characters, setCharacters] = useState([
    { id: 1, name: "🧙‍♂️ Gandalf o Mago", recruited: 0 },
    { id: 2, name: "⚔️ Aragorn o Guerreiro", recruited: 1 },
    { id: 3, name: "🏹 Legolas o Arqueiro", recruited: 0 }
  ]);
  const [newCharacter, setNewCharacter] = useState("");
  const [filter, setFilter] = useState('all');
  
  // Estados para melhorias
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({ title: '', message: '', action: null });
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    async function openDatabase() {
      try {
        const database = await SQLite.openDatabaseAsync("party.db");
        setDb(database);
      } catch (error) {
        console.error("Erro ao abrir banco de dados:", error);
      }
    }
    
    openDatabase();
  }, []);

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarVisible(true);
  };

  const showModal = (title, message, action) => {
    setModalData({ title, message, action });
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setModalData({ title: '', message: '', action: null });
  };

  function addCharacter() {
    if (newCharacter === "") {
      showSnackbar("⚠️ Digite um nome para o personagem!");
      return;
    }
    
    const action = () => {
      const newId = characters.length + 1; 
      const newCharacterObj = {
        id: newId,
        name: newCharacter,
        recruited: 0 
      };
      
      const newList = [newCharacterObj]; 
      const allCharacters = newList.concat(characters);
      setCharacters(allCharacters); 
      setNewCharacter(""); 
      hideModal();
      showSnackbar(`✨ ${newCharacter} foi adicionado à party!`);
    };

    showModal(
      "Adicionar Personagem",
      `Deseja adicionar "${newCharacter}" à sua party?`,
      action
    );
  }

  function toggleRecruit(character) {
    const newCharacters = [];
    for (let i = 0; i < characters.length; i++) {
      const currentChar = characters[i];
      if (currentChar.id === character.id) {
        const newStatus = currentChar.recruited ? 0 : 1;
        newCharacters.push({
          id: currentChar.id,
          name: currentChar.name,
          recruited: newStatus
        });
      } else {
        newCharacters.push(currentChar);
      }
    }
    setCharacters(newCharacters);
    
    const action = character.recruited ? "removido da party" : "recrutado";
    const emoji = character.recruited ? "💤" : "⭐";
    showSnackbar(`${emoji} ${character.name} foi ${action}!`);
  }

  function removeCharacter(character) {
    const action = () => {
      const newList = [];
      for (let i = 0; i < characters.length; i++) {
        if (characters[i].id !== character.id) {
          newList.push(characters[i]);
        }
      }
      setCharacters(newList);
      hideModal();
      showSnackbar(`🗑️ ${character.name} foi removido da party!`);
    };

    showModal(
      "Remover Personagem",
      `Tem certeza que deseja remover "${character.name}" da party?`,
      action
    );
  }

  const getFilteredCharacters = () => {
    switch (filter) {
      case 'recruited':
        return characters.filter(char => char.recruited === 1);
      case 'available':
        return characters.filter(char => char.recruited === 0);
      default:
        return characters;
    }
  };

  function renderCharacter({ item }) {
    return (
      <CharacterCard
        character={item}
        onToggleRecruit={toggleRecruit}
        onRemoveCharacter={removeCharacter}
      />
    );
  }

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        
        <Header />
        
        <AddCharacterForm
          newCharacter={newCharacter}
          setNewCharacter={setNewCharacter}
          onAddCharacter={addCharacter}
        />

        <CharacterFilter
          filter={filter}
          onFilterChange={setFilter}
        />

        <FlatList
          data={getFilteredCharacters()}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderCharacter}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />

        <ConfirmationModal
          visible={modalVisible}
          title={modalData.title}
          message={modalData.message}
          onConfirm={modalData.action}
          onCancel={hideModal}
        />

        <FeedbackSnackbar
          visible={snackbarVisible}
          message={snackbarMessage}
          onDismiss={() => setSnackbarVisible(false)}
        />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D2A0F", // Verde escuro para o fundo
    paddingTop: 50, 
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  list: {
    flex: 1,
  },
});