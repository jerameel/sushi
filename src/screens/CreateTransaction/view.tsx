import React, { useReducer, useState } from 'react';
import Text from 'components/base/Text';
import { ScrollView, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { CreateTransactionProps } from './props';
import { Back } from 'components/base/SVG';
import TextInput from 'components/base/TextInput';
import Button from 'components/base/Button';

const CreateTransactionView = (props: CreateTransactionProps) => {
  const { navigation, createTransaction } = props;
  const { styles, theme, colors } = useStyles();

  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.BACKGROUND}
        barStyle={theme.base === 'Dark' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerBackAction}
          onPress={() => {
            navigation.goBack();
          }}>
          <Back fill={colors.PRIMARY_TEXT} width={24} height={24} />
        </TouchableOpacity>
        <Text containerStyle={styles.headerTitleContainer} variant="title">
          New Transaction
        </Text>
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.contentScroll}>
          <TextInput
            containerStyle={styles.textFieldContainer}
            label="Category"
            value={category}
            onChangeText={(text) => setCategory(text)}
          />
          <TextInput
            containerStyle={styles.textFieldContainer}
            label="Short Description"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />

          <TextInput
            containerStyle={styles.textFieldContainer}
            label="Amount"
            value={amount}
            onChangeText={(text) => setAmount(text)}
            placeholder="0"
          />
        </ScrollView>
        <View style={styles.actionsContainer}>
          <Button
            onPress={() =>
              createTransaction({
                category: category || 'others',
                description: description || '',
                amount: Number(amount) || 0,
                sourceWalletId: null,
                destinationWalletId: null,
              })
            }
            label="Create Transaction"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateTransactionView;
