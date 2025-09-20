# 🏰 App RPG - Versão Refatorada

Uma aplicação React Native para gerenciar parties de RPG, refatorada com componentes profissionais e melhorias de UX.

## 📱 Sobre o Projeto

Este projeto foi refatorado de uma versão monolítica (tudo em um único `App.js`) para uma arquitetura componentizada e profissional, utilizando **React Native Paper** como biblioteca de UI e implementando diversas melhorias de usabilidade.

## 🏗️ Arquitetura

### Estrutura de Pastas
```
app-rpg/
├── components/
│   ├── Header.js
│   ├── AddCharacterForm.js
│   ├── CharacterCard.js
│   ├── ConfirmationModal.js
│   ├── FeedbackSnackbar.js
│   └── CharacterFilter.js
├── App.js
├── theme.js
└── README.md
```

### Componentização Implementada

#### 1. **Header.js**
- **O que foi feito**: Extraído o cabeçalho da aplicação com título e subtítulo
- **Por que foi feito**: Separar responsabilidades e permitir reutilização
- **Valor**: Facilita manutenção e permite customização independente do header

#### 2. **AddCharacterForm.js**
- **O que foi feito**: Componente isolado para formulário de adição de personagens
- **Por que foi feito**: Isolar lógica de entrada de dados e validação
- **Valor**: Componente reutilizável e testável independentemente

#### 3. **CharacterCard.js**
- **O que foi feito**: Card individual para cada personagem com ações
- **Por que foi feito**: Encapsular comportamento e visual de cada item da lista
- **Valor**: Facilita customização e manutenção de cada item

## 🎨 Biblioteca de UI - React Native Paper

### Escolha da Biblioteca
**React Native Paper** foi escolhida por:
- Seguir Material Design 3 guidelines
- Componentes nativos otimizados
- Excelente sistema de temas
- Compatibilidade com Expo
- Ampla documentação e comunidade ativa

### Componentes Substituídos
- ✅ `TouchableOpacity` → `Button` e `Card`
- ✅ `TextInput` → `TextInput` (Paper version)
- ✅ `Text` → `Title`, `Caption`, `Text` (Paper versions)
- ✅ Layout básico → `Card`, `Portal`, `Dialog`

## 🚀 Melhorias Implementadas

### 1. 📝 Modal de Confirmação
- **O que foi feito**: Modal elegante para confirmar ações importantes (adicionar/remover personagens)
- **Por que foi feito**: Evitar ações acidentais e melhorar feedback ao usuário
- **Valor**: Reduz erros do usuário e proporciona experiência mais segura

### 2. 🎯 Ícones Visuais
- **O que foi feito**: Ícones Material em botões e filtros usando React Native Paper
- **Por que foi feito**: Melhorar clareza visual e comunicação não-verbal
- **Valor**: Interface mais intuitiva e profissional

### 3. 💬 Feedback Visual (Snackbar/Toast)
- **O que foi feito**: Notificações temporárias para todas as ações (adicionar, remover, recrutar)
- **Por que foi feito**: Confirmar ações realizadas e orientar o usuário
- **Valor**: Melhora significativamente o feedback da aplicação

### 4. 🔍 Filtro de Personagens
- **O que foi feito**: Sistema de filtros para mostrar todos, apenas recrutados ou apenas disponíveis
- **Por que foi feito**: Facilitar navegação em listas grandes e organizar visualização
- **Valor**: Melhora produtividade do usuário em parties grandes

## 🎨 Sistema de Tema

O tema customizado utiliza uma paleta de cores verdes naturais e elegantes:
- **Primária**: `#4CAF50` (Verde principal)
- **Secundária**: `#2E7D32` (Verde escuro)
- **Background**: `#0D2A0F` (Verde muito escuro para fundo)
- **Surface**: `#1B5E20` (Verde escuro para cards)
- **Texto**: `#C8E6C9` (Verde claro)
- **Outline**: `#388E3C` (Verde médio para bordas)

## 📦 Dependências Adicionadas

```json
{
  "react-native-paper": "^5.12.3",
  "react-native-vector-icons": "^10.0.3",
  "@expo/vector-icons": "^14.0.2",
  "react-native-safe-area-context": "4.10.5"
}
```

## 🔧 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar aplicação:**
   ```bash
   npm start
   ```

3. **Para Android (APK):**
   ```bash
   npx expo build:android
   ```

## 📈 Melhorias de Código

### Antes (Problemas):
- Todo código em um único arquivo
- Componentes misturados com lógica
- Sem feedback visual adequado
- Interface básica sem padrões de design
- Difícil manutenção e teste

### Depois (Soluções):
- ✅ Componentes separados e reutilizáveis
- ✅ Lógica isolada e testável
- ✅ Feedback visual completo
- ✅ Design system consistente (Material Design 3)
- ✅ Código organizado e manutenível

## 🎯 Próximos Passos

- [ ] Implementar animações de transição
- [ ] Adicionar persistência no SQLite
- [ ] Sistema de busca por nome
- [ ] Ordenação personalizada
- [ ] Dark/Light mode toggle
- [ ] Testes unitários dos componentes

---

**Desenvolvido com ❤️ usando React Native + Expo + React Native Paper**