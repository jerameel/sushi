import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import Text from 'components/base/Text';
import useStyles from './style';
import { AlertModalPrivateProps } from './props';

const AlertModal = (props: AlertModalPrivateProps) => {
  const {
    containerStyle = {},
    visible,
    title,
    description,
    actions,
    theme,
  } = props;
  const { styles } = useStyles(theme);
  const hasValidProperty =
    title !== undefined &&
    description !== undefined &&
    Array.isArray(actions) &&
    actions.length > 0;
  return (
    <Modal
      visible={visible && hasValidProperty}
      transparent
      animationType="none">
      <View style={[styles.container, containerStyle]}>
        <View style={styles.contentArea}>
          <Text variant="title" style={styles.title}>
            {title || ''}
          </Text>

          <Text
            variant="body"
            containerStyle={styles.descriptionContainer}
            style={styles.description}>
            {description || ''}
          </Text>

          <View style={styles.actionContainer}>
            {(actions || []).map((action) => (
              <TouchableOpacity
                key={action.label}
                activeOpacity={0.85}
                onPress={() => action.onPress()}>
                <View style={styles.actionButton}>
                  <Text style={styles.actionLabel}>{action.label}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
