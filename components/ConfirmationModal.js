import React from 'react';
import { Portal, Dialog, Button, Text } from 'react-native-paper';

const ConfirmationModal = ({ visible, title, message, onConfirm, onCancel }) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel}>
        <Dialog.Title style={{ color: '#4CAF50' }}>{title}</Dialog.Title>
        <Dialog.Content>
          <Text style={{ color: '#C8E6C9' }}>{message}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button 
            mode="outlined" 
            onPress={onCancel}
            textColor="#C8E6C9"
            style={{ borderColor: '#388E3C' }}
          >
            Cancelar
          </Button>
          <Button 
            mode="contained" 
            onPress={onConfirm}
            buttonColor="#2E7D32"
            textColor="#C8E6C9"
          >
            Confirmar
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ConfirmationModal;