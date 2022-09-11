import React, { useEffect, useRef, useState } from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Text from 'components/base/Text';
import useStyles from './style';
import { TimePickerProps } from './props';
import { Down, Close } from 'components/base/SVG';
import { Calendar } from 'react-native-calendars';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import format from 'date-fns/format';
import Button from 'components/base/Button';

const HOURS = [...new Array(24)].map((v, i) => `${i}`.padStart(2, '0'));
const MINUTES = [...new Array(60)].map((v, i) => `${i}`.padStart(2, '0'));

const TimePicker = (props: TimePickerProps) => {
  const {
    containerStyle = {},
    theme,
    label,
    selectedTime,
    setSelectedTime,
  } = props;

  const { styles, colors } = useStyles(theme);

  const hourRef = useRef<any>(null);
  const minuteRef = useRef<any>(null);
  const [showModal, setShowModal] = useState(false);

  // TODO: Fix behavior
  useEffect(() => {
    if (selectedTime && showModal) {
      if (hourRef && hourRef.current) {
        setTimeout(() => {
          hourRef.current.scrollToIndex({
            index: selectedTime?.getHours(),
            animated: true,
            viewPosition: 0.5,
          });
        }, 500);
      }

      if (minuteRef && minuteRef.current) {
        setTimeout(() => {
          minuteRef.current.scrollToIndex({
            index: selectedTime?.getMinutes(),
            animated: true,
            viewPosition: 0.5,
          });
        }, 700);
      }
    }
  }, [selectedTime, showModal]);

  const hourIndex = selectedTime?.getHours();
  const minuteIndex = selectedTime?.getMinutes();

  const displayTime = (() => {
    if (selectedTime) {
      return format(selectedTime, 'hh:mm a');
    }
    return '';
  })();

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
            setShowModal(true);
          }}>
          <Text variant="body" style={styles.value}>
            {displayTime || ''}
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
            <View style={styles.timePickerContainer}>
              <FlatList
                ref={hourRef}
                style={styles.timePickerList}
                data={HOURS}
                keyExtractor={(item) => `${item}`}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        const refValue = new Date(
                          (selectedTime || new Date()).getTime(),
                        );
                        refValue.setHours(index);
                        setSelectedTime(refValue);
                      }}>
                      <Text
                        style={
                          index === hourIndex
                            ? styles.timePickerLabelActive
                            : styles.timePickerLabel
                        }>{`${item}`}</Text>
                    </TouchableOpacity>
                  );
                }}
                onScrollToIndexFailed={() => null}
              />
              <FlatList
                ref={minuteRef}
                style={styles.timePickerList}
                data={MINUTES}
                keyExtractor={(item) => `${item}`}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        const refValue = new Date(
                          (selectedTime || new Date()).getTime(),
                        );
                        refValue.setMinutes(index);
                        setSelectedTime(refValue);
                      }}>
                      <Text
                        style={
                          index === minuteIndex
                            ? styles.timePickerLabelActive
                            : styles.timePickerLabel
                        }>{`${item}`}</Text>
                    </TouchableOpacity>
                  );
                }}
                onScrollToIndexFailed={() => null}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default TimePicker;
