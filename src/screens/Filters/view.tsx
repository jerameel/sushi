import React, { useEffect, useState } from 'react';
import Text from 'components/base/Text';
import { View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Close, DownLeft, UpRight } from 'components/base/SVG';
import DatePicker from 'components/module/DatePicker';
import TextInput from 'components/base/TextInput';
import Button from 'components/base/Button';
import ButtonView from 'components/base/Button/view';

import Picker from 'components/base/Picker';
import useTranslationKey from 'utils/hooks/useTranslationKey';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from 'types/Route';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { COLORS, getGlobalStyles } from 'theme';
import { Wallets } from 'store/wallets';
import Chip from 'components/base/Chip';
import { applyFiltersAction, Filters } from 'store/filters';

export const toWalletOptions = (wallets: Wallets) => {
  return Object.keys(wallets).map((key) => {
    const wallet = wallets[key];
    return {
      label: wallet.label,
      value: wallet.id,
    };
  });
};

export interface FiltersProps
  extends NativeStackScreenProps<MainStackParamList, 'FILTERS'> {}

const FiltersView = (props: FiltersProps) => {
  const { navigation } = props;

  const dispatch = useDispatch();

  const theme = useSelector((state: RootState) => state.theme);
  const colors = COLORS[theme.base];
  const STYLES = getGlobalStyles(theme.base);

  const filters = useSelector((state: RootState) => state.filters);
  const wallets = useSelector((state: RootState) => state.wallets);
  const walletOptions = toWalletOptions(wallets);

  const [startDate, setStartDate] = useState<Date | null>(filters.startDate);
  const [endDate, setEndDate] = useState<Date | null>(filters.endDate);
  const [searchTerm, setSearchTerm] = useState(filters.searchTerm);

  const [accountId, setAccountId] = useState<string | null>(filters.accountId);
  const [transactionType, setTransactionType] = useState<
    'DEBIT' | 'CREDIT' | null
  >(filters.transactionType);

  const [TEXT_SHOW_ALL] = useTranslationKey(['SHOW_ALL']);
  const [TEXT_ALL] = useTranslationKey(['ALL']);
  const [TEXT_DEBIT] = useTranslationKey(['DEBIT']);
  const [TEXT_CREDIT] = useTranslationKey(['CREDIT']);

  const applyFilters = (selectedFilters: Filters) => {
    dispatch(applyFiltersAction(selectedFilters));
  };

  return (
    <SafeAreaView style={STYLES.CONTAINER}>
      <StatusBar
        backgroundColor={colors.BACKGROUND}
        barStyle={theme.base === 'Dark' ? 'light-content' : 'dark-content'}
      />
      <View style={STYLES.HEADER}>
        <Text
          containerStyle={{
            flex: 1,
            marginRight: 8,
          }}
          variant="title"
          theme={theme}
          translationKey="FILTERS"
        />
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Close fill={colors.PRIMARY_TEXT} width={24} height={24} />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          padding: 16,
        }}
        style={{
          flex: 1,
        }}>
        <TextInput
          translationKey="SEARCH_TERM"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          theme={theme}
        />

        <Text
          containerStyle={{
            marginTop: 4,
          }}
          variant="body"
          theme={theme}
          translationKey="SEARCH_DESCRIPTION"
        />

        <Picker
          containerStyle={{ marginTop: 16 }}
          translationKey="ACCOUNT"
          selectedValue={accountId || undefined}
          onSelect={(value) => setAccountId(value)}
          options={walletOptions}
          theme={theme}
          renderActionButton={(onPress) => (
            <ButtonView
              containerStyle={{ marginTop: 8 }}
              onPress={() => {
                onPress();
              }}
              label={TEXT_SHOW_ALL}
              outline
              theme={theme}
            />
          )}
        />
        <DatePicker
          containerStyle={{ marginTop: 16 }}
          labelTranslationKey="DATE_RANGE"
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          defaultLabelTranslationKey="SHOW_ALL"
          theme={theme}
        />

        <Text
          containerStyle={{
            marginTop: 16,
          }}
          variant="label"
          theme={theme}
          translationKey="TRANSACTION_TYPE"
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 8,
            marginBottom: 8,
          }}>
          <Chip
            label={TEXT_ALL}
            selected={transactionType === null}
            onPress={() => setTransactionType(null)}
          />
          <Chip
            label={TEXT_DEBIT}
            selected={transactionType === 'DEBIT'}
            onPress={() => setTransactionType('DEBIT')}
            icon={<DownLeft fill={colors.POSITIVE} width={16} height={16} />}
          />
          <Chip
            label={TEXT_CREDIT}
            selected={transactionType === 'CREDIT'}
            onPress={() => setTransactionType('CREDIT')}
            icon={<UpRight fill={colors.NEGATIVE} width={16} height={16} />}
          />
        </View>
      </ScrollView>
      <View
        style={{
          padding: 16,
        }}>
        <Button
          outline
          onPress={() => {
            setStartDate(null);
            setEndDate(null);
            setSearchTerm('');
            setAccountId(null);
            setTransactionType(null);
          }}
          translationKey="RESET_FILTER"
          theme={theme}
        />

        <Button
          containerStyle={{ marginTop: 8 }}
          onPress={() => {
            applyFilters({
              startDate,
              endDate,
              searchTerm,
              accountId,
              transactionType,
            });
            navigation.goBack();
          }}
          translationKey="APPLY_FILTER"
          theme={theme}
        />
      </View>
    </SafeAreaView>
  );
};

export default FiltersView;
