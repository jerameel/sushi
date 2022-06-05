import React, { useState } from 'react';
import Text from 'components/base/Text';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { TransactionDetailsProps } from './props';
import { Back, Delete, Edit } from 'components/base/SVG';
import AlertModal from 'components/module/AlertModal';
import { formatCurrency } from 'utils/formatCurrency';
import { formatDate } from 'utils/formatDate';

const TransactionDetailsView = (props: TransactionDetailsProps) => {
  const {
    navigation,
    transaction,
    sourceWallet,
    destinationWallet,
    deleteTransaction,
    language,
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
        <Text
          containerStyle={styles.headerTitleContainer}
          variant="title"
          theme={theme}>
          Transaction Details
        </Text>
        <TouchableOpacity
          style={styles.headerRightAction}
          onPress={() => {
            navigation.navigate('EDIT_TRANSACTION', {
              transactionId: transaction.id,
            });
          }}>
          <Edit fill={colors.PRIMARY_TEXT} width={24} height={24} />
        </TouchableOpacity>
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
          <Text variant="subtitle" style={styles.amountText} theme={theme}>
            {`${formatCurrency(Math.abs(transaction.amount), { language })}`}
          </Text>
        </View>
        {transaction.description.length > 0 && (
          <Text containerStyle={styles.descriptionContainer} theme={theme}>
            {transaction.description}
          </Text>
        )}
        <View style={styles.detailBorder} />
        <View style={styles.detailCard}>
          <Text variant="label" theme={theme}>
            Category
          </Text>
          <Text
            variant="subtitle"
            containerStyle={styles.detailCardSubtitle}
            theme={theme}>
            {transaction.category}
          </Text>
        </View>
        <View style={styles.detailCard}>
          <Text variant="label" theme={theme}>
            {destinationWallet ? 'Source Wallet' : 'Wallet'}
          </Text>
          <Text
            variant="subtitle"
            containerStyle={styles.detailCardSubtitle}
            theme={theme}>
            {sourceWallet.label}
          </Text>
        </View>
        {destinationWallet && (
          <View style={styles.detailCard}>
            <Text variant="label" theme={theme}>
              Destination Wallet
            </Text>
            <Text
              variant="subtitle"
              containerStyle={styles.detailCardSubtitle}
              theme={theme}>
              {destinationWallet.label}
            </Text>
          </View>
        )}
        <View style={styles.detailCard}>
          <Text variant="label" theme={theme}>
            Date Created
          </Text>
          <Text
            variant="subtitle"
            containerStyle={styles.detailCardSubtitle}
            theme={theme}>
            {formatDate(transaction.createdAt)}
          </Text>
        </View>
        {!!transaction.updatedAt && (
          <View style={styles.detailCard}>
            <Text variant="label" theme={theme}>
              Date Updated
            </Text>
            <Text
              variant="subtitle"
              containerStyle={styles.detailCardSubtitle}
              theme={theme}>
              {formatDate(transaction.updatedAt)}
            </Text>
          </View>
        )}
      </View>
      <AlertModal
        theme={theme}
        title="Delete Transaction?"
        description={'This will permanently delete the transaction record.'}
        visible={showDelete}
        actions={[
          {
            label: 'Keep',
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
