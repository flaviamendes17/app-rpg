import React from 'react';
import { Snackbar } from 'react-native-paper';
import { Text } from 'react-native';

const FeedbackSnackbar = ({ visible, message, onDismiss, action }) => {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={3000}
      style={{ 
        backgroundColor: '#1B5E20',
        borderColor: '#4CAF50',
        borderWidth: 1,
      }}
      action={action}
    >
      <Text style={{ color: '#C8E6C9' }}>{message}</Text>
    </Snackbar>
  );
};

export default FeedbackSnackbar;