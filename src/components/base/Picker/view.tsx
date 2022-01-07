import React, { useState } from 'react';
import { Modal, View, TouchableOpacity, ScrollView } from 'react-native';
import Text from 'components/base/Text';
import useStyles from './style';
import { PickerProps } from './props';
import { Down, Close } from 'components/base/SVG';

const Picker = (props: PickerProps) => {
  const {
    containerStyle = {},
    theme,
    onSelect,
    selectedValue,
    options,
    label,
    placeholder,
  } = props;

  const { styles, colors } = useStyles(theme);

  const [showModal, setShowModal] = useState(false);

  const selectedOption = options.find(
    (option) => option.value === selectedValue,
  );
  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <Text variant="label" style={styles.label}>
          {label}
        </Text>

        <TouchableOpacity
          style={styles.inputContainer}
          activeOpacity={0.6}
          onPress={() => {
            if (options.length > 0) {
              setShowModal(true);
            }
          }}>
          <Text variant="body" style={styles.value}>
            {selectedOption?.label || placeholder || ''}
          </Text>
          <Down width={16} height={16} fill={colors.BORDER} />
        </TouchableOpacity>
      </View>

      <Modal visible={showModal} transparent animationType="fade">
        <View style={[styles.modalContainer, containerStyle]}>
          <View style={styles.modalContentArea}>
            <View style={styles.modalTitleContainer}>
              <Text
                variant="title"
                containerStyle={styles.modalTitleTextContainer}
                style={styles.modalTitle}>
                {label}
              </Text>
              <TouchableOpacity
                style={styles.modalTitleAction}
                onPress={() => {
                  setShowModal(false);
                }}>
                <Close fill={colors.PRIMARY_TEXT} width={24} height={24} />
              </TouchableOpacity>
            </View>
            <ScrollView>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.label}
                  activeOpacity={0.6}
                  onPress={() => {
                    setShowModal(false);
                    if (onSelect) {
                      onSelect(option.value);
                    }
                  }}>
                  <View style={styles.modalItemContainer}>
                    <Text
                      style={
                        option.value === selectedValue
                          ? styles.modalItemLabelActive
                          : styles.modalItemLabel
                      }>
                      {option.label}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Picker;
