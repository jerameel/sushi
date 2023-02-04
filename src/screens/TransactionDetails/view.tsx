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
import TextView from 'components/base/Text/view';

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
        barStyle={colors.STATUS_BAR}
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
          <TextView
            variant="subtitle"
            style={{ ...styles.amountText, color: config.color }}
            theme={theme}>
            {`${config.prefix}${formatCurrency(Math.abs(transaction.amount), {
              language,
            })}`}
          </TextView>
        </View>
        {transaction.description.length > 0 && (
          <TextView containerStyle={styles.descriptionContainer} theme={theme}>
            {transaction.description}
          </TextView>
        )}
        <View style={styles.detailBorder} />
        <View style={styles.detailCard}>
          <Text variant="label" theme={theme} translationKey="CATEGORY" />
          <TextView
            variant="subtitle"
            containerStyle={styles.detailCardValue}
            theme={theme}>
            {transaction.category}
          </TextView>
        </View>
        <View style={styles.detailCard}>
          <Text
            variant="label"
            theme={theme}
            translationKey={destinationWallet ? 'SOURCE_ACCOUNT' : 'ACCOUNT'}
          />
          <TextView
            variant="subtitle"
            containerStyle={styles.detailCardValue}
            theme={theme}>
            {sourceWallet.label}
          </TextView>
        </View>
        {destinationWallet && (
          <View style={styles.detailCard}>
            <Text
              variant="label"
              theme={theme}
              translationKey="DESTINATION_ACCOUNT"
            />
            <TextView
              variant="subtitle"
              containerStyle={styles.detailCardValue}
              theme={theme}>
              {destinationWallet.label}
            </TextView>
          </View>
        )}
        <View style={styles.detailCard}>
          <Text
            variant="label"
            theme={theme}
            translationKey="TRANSACTION_DATE"
          />
          <TextView
            variant="subtitle"
            containerStyle={styles.detailCardValue}
            theme={theme}>
            {formatDate(transaction.paidAt)}
          </TextView>
        </View>
        <View style={styles.detailCard}>
          <Text
            style={styles.detailCardHidden}
            variant="label"
            theme={theme}
            translationKey="DATE_CREATED"
          />
          <TextView
            variant="subtitle"
            containerStyle={styles.detailCardValue}
            style={styles.detailCardHidden}
            theme={theme}>
            {formatDate(transaction.createdAt)}
          </TextView>
        </View>
        {!!transaction.updatedAt && (
          <View style={styles.detailCard}>
            <Text
              style={styles.detailCardHidden}
              variant="label"
              theme={theme}
              translationKey="DATE_UPDATED"
            />
            <TextView
              variant="subtitle"
              containerStyle={styles.detailCardValue}
              style={styles.detailCardHidden}
              theme={theme}>
              {formatDate(transaction.updatedAt)}
            </TextView>
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
