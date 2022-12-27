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
import Text from 'components/base/Text';

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

  const config = (() => {
    const defaultConfig = {
      color: colors.PRIMARY_TEXT,
      prefix: '',
    };
    if (destinationWallet) {
      return defaultConfig;
    }

    if (transaction.amount > 0) {
      return {
        color: colors.POSITIVE,
        prefix: '+ ',
      };
    }

    if (transaction.amount < 0) {
      return {
        color: colors.NEGATIVE,
        prefix: '- ',
      };
    }

    return defaultConfig;
  })();

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
          theme={theme}
          translationKey="TRANSACTION_DETAILS"
        />
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
          <Text
            variant="subtitle"
            style={{ ...styles.amountText, color: config.color }}
            theme={theme}>
            {`${config.prefix}${formatCurrency(Math.abs(transaction.amount), {
              language,
            })}`}
          </Text>
        </View>
        {transaction.description.length > 0 && (
          <Text containerStyle={styles.descriptionContainer} theme={theme}>
            {transaction.description}
          </Text>
        )}
        <View style={styles.detailBorder} />
        <View style={styles.detailCard}>
          <Text variant="label" theme={theme} translationKey="CATEGORY" />
          <Text
            variant="subtitle"
            containerStyle={styles.detailCardValue}
            theme={theme}>
            {transaction.category}
          </Text>
        </View>
        <View style={styles.detailCard}>
          <Text
            variant="label"
            theme={theme}
            translationKey={destinationWallet ? 'SOURCE_ACCOUNT' : 'ACCOUNT'}
          />
          <Text
            variant="subtitle"
            containerStyle={styles.detailCardValue}
            theme={theme}>
            {sourceWallet.label}
          </Text>
        </View>
        {destinationWallet && (
          <View style={styles.detailCard}>
            <Text
              variant="label"
              theme={theme}
              translationKey="DESTINATION_ACCOUNT"
            />
            <Text
              variant="subtitle"
              containerStyle={styles.detailCardValue}
              theme={theme}>
              {destinationWallet.label}
            </Text>
          </View>
        )}
        <View style={styles.detailCard}>
          <Text
            variant="label"
            theme={theme}
            translationKey="TRANSACTION_DATE"
          />
          <Text
            variant="subtitle"
            containerStyle={styles.detailCardValue}
            theme={theme}>
            {formatDate(transaction.paidAt)}
          </Text>
        </View>
        <View style={styles.detailCard}>
          <Text
            style={styles.detailCardHidden}
            variant="label"
            theme={theme}
            translationKey="DATE_CREATED"
          />
          <Text
            variant="subtitle"
            containerStyle={styles.detailCardValue}
            style={styles.detailCardHidden}
            theme={theme}>
            {formatDate(transaction.createdAt)}
          </Text>
        </View>
        {!!transaction.updatedAt && (
          <View style={styles.detailCard}>
            <Text
              style={styles.detailCardHidden}
              variant="label"
              theme={theme}
              translationKey="DATE_UPDATED"
            />
            <Text
              variant="subtitle"
              containerStyle={styles.detailCardValue}
              style={styles.detailCardHidden}
              theme={theme}>
              {formatDate(transaction.updatedAt)}
            </Text>
          </View>
        )}
      </View>
      <AlertModal
        theme={theme}
        titleTranslationKey="DELETE_TRANSACTION"
        descriptionTranslationKey="DELETE_TRANSACTION_INFO"
        visible={showDelete}
        actionTranslationKeys={['KEEP', 'DELETE']}
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
