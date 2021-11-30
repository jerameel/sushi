import React, { useReducer, useState } from 'react';
import numbro from 'numbro';
import sortBy from 'ramda/es/sortBy';
import reverse from 'ramda/es/reverse';
import Text from 'components/base/Text';
import { ScrollView, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { TransactionDetailsProps } from './props';
import { Back, Delete } from 'components/base/SVG';
import { Transaction } from 'store/transactions';
import TransactionCard from 'components/module/TransactionCard';
import moment from 'moment';
import AlertModal from 'components/module/AlertModal';

const TransactionDetailsView = (props: TransactionDetailsProps) => {
  const {
    navigation,
    transaction,
    sourceWallet,
    destinationWallet,
    deleteTransaction,
  } = props;
  const { styles, theme, colors } = useStyles();
  const [showDelete, setShowDelete] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.BACKGROUND}
        barStyle={theme.base === 'Dark' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerLeftAction}
          onPress={() => {
            navigation.goBack();
          }}>
          <Back fill={colors.PRIMARY_TEXT} width={24} height={24} />
        </TouchableOpacity>
        <Text containerStyle={styles.headerTitleContainer} variant="title">
          Transaction Details
        </Text>
        <TouchableOpacity
          style={styles.headerRightAction}
          onPress={() => {
            setShowDelete(true);
          }}>
          <Delete fill={colors.PRIMARY_TEXT} width={24} height={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.amountCard}>
          <Text variant="subtitle" style={styles.amountText}>
            {`${numbro(Math.abs(transaction.amount)).formatCurrency({
              mantissa: 2,
              spaceSeparated: true,
              thousandSeparated: true,
            })}`}
          </Text>
        </View>
        {transaction.description.length > 0 && (
          <Text containerStyle={styles.descriptionContainer}>
            {transaction.description}
          </Text>
        )}
        <View style={styles.detailBorder} />
        <View style={styles.detailCard}>
          <Text variant="label">Category</Text>
          <Text variant="subtitle" containerStyle={{ marginTop: 2 }}>
            {transaction.category}
          </Text>
        </View>
        <View style={styles.detailCard}>
          <Text variant="label">
            {destinationWallet ? 'Source Wallet' : 'Wallet'}
          </Text>
          <Text variant="subtitle" containerStyle={{ marginTop: 2 }}>
            {sourceWallet.label}
          </Text>
        </View>
        {destinationWallet && (
          <View style={styles.detailCard}>
            <Text variant="label">Destination Wallet</Text>
            <Text variant="subtitle" containerStyle={{ marginTop: 2 }}>
              {destinationWallet.label}
            </Text>
          </View>
        )}
        <View style={styles.detailCard}>
          <Text variant="label">Date Created</Text>
          <Text variant="subtitle" containerStyle={{ marginTop: 2 }}>
            {moment(transaction.createdAt).format('DD MMM YYYY hh:mm a')}
          </Text>
        </View>
      </View>
      <AlertModal
        theme={theme}
        title="Delete Transaction?"
        description={'This will permanently delete the transaction record.'}
        visible={showDelete}
        actions={[
          {
            label: 'Cancel',
            onPress: () => {
              setShowDelete(false);
            },
          },
          {
            label: 'Delete',
            onPress: () => {
              setShowDelete(false);
              deleteTransaction();
            },
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default TransactionDetailsView;
