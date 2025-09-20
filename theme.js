import { configureFonts, MD3LightTheme } from 'react-native-paper';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#4CAF50',        // Verde principal
    secondary: '#2E7D32',      // Verde escuro
    surface: '#1B5E20',        // Verde muito escuro para cards
    background: '#0D2A0F',     // Verde quase preto para fundo
    onSurface: '#C8E6C9',      // Verde claro para texto em superfícies
    onBackground: '#C8E6C9',   // Verde claro para texto em fundo
    onPrimary: '#FFFFFF',      // Branco para texto em verde principal
    outline: '#388E3C',        // Verde médio para bordas
  },
};

export default theme;