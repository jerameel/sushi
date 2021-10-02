import React from 'react';
import Text from 'components/base/Text';
import { ScrollView, View, StatusBar } from 'react-native';
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
        <Text variant="title">Title</Text>
        <Text variant="subtitle">Subtitle</Text>
        <Text variant="body">Body</Text>
        <Text variant="label">Label</Text>
      </View>
    </SafeAreaView>
  );
};

export default EditorView;
