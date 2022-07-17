import React from 'react';
import { AlertModalProps } from '../../module/AlertModal/props';

import AlertModal from '../../module/AlertModal/view';
import { Translation } from 'types/Translation';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { TRANSLATIONS } from 'constants/translations';

type TranslationKey = keyof Translation;
type SmartAlertModalProps = {
  titleTranslationKey: keyof Translation;
  descriptionTranslationKey: keyof Translation;
  descriptionReplacementRecord?: Record<string, string>;
  actionTranslationKeys?: TranslationKey[];
};

const SmartAlertModal = (
  props: Omit<AlertModalProps, 'title' | 'description'> & SmartAlertModalProps,
) => {
  const {
    titleTranslationKey,
    descriptionTranslationKey,
    descriptionReplacementRecord = {},
    actionTranslationKeys,
    actions,
    ...textInputProps
  } = props;
  // const theme = useSelector((state: RootState) => state.theme);
  const language = useSelector((state: RootState) => state.language.selected);
  const translatedDescription =
    TRANSLATIONS[language][descriptionTranslationKey];
  const updatedDescription = Object.keys(descriptionReplacementRecord).reduce(
    (desc, key) => {
      return desc.replace(`{{${key}}}`, descriptionReplacementRecord[key]);
    },
    translatedDescription,
  );
  return (
    <AlertModal
      {...textInputProps}
      title={TRANSLATIONS[language][titleTranslationKey]}
      description={updatedDescription}
      actions={
        actionTranslationKeys
          ? (actions || []).map((action, index) => ({
              ...action,
              label: TRANSLATIONS[language][actionTranslationKeys[index]],
            }))
          : actions
      }
    />
  );
};

export default SmartAlertModal;
