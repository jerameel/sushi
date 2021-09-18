import React from 'react';
import { ScrollView, View, StatusBar, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { EditorProps } from './props';

const EditorView = (props: EditorProps) => {
  const {} = props;
  const { styles, theme, colors } = useStyles();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.BACKGROUND}
        barStyle={theme.base === 'Dark' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.container}>
        <Text>Editor Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default EditorView;
