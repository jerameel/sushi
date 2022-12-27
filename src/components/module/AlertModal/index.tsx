import React from 'react';
import {
  AlertModalPrivateProps,
  AlertModalProps,
} from '../../module/AlertModal/props';

import AlertModalView from '../../module/AlertModal/view';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { TRANSLATIONS } from 'constants/translations';

const AlertModal = (
  props: Omit<AlertModalPrivateProps, 'title' | 'description'> &
    AlertModalProps,
) => {
  const {
    titleTranslationKey,
    descriptionTranslationKey,
    descriptionReplacementRecord = {},
    actionTranslationKeys,
    actions,
    ...otherProps
  } = props;
  const theme = useSelector((state: RootState) => state.theme);
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
    <AlertModalView
      theme={theme}
      {...otherProps}
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

export default AlertModal;
