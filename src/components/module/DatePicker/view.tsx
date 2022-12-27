import React, { useState } from 'react';
import { Modal, View, TouchableOpacity, ScrollView } from 'react-native';
import Text from 'components/base/Text';
import useStyles from './style';
import { DatePickerPrivateProps } from './props';
import { Down, Close } from 'components/base/SVG';
import { Calendar } from 'react-native-calendars';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import format from 'date-fns/format';
import Button from 'components/base/Button/view';

const DatePicker = (props: DatePickerPrivateProps) => {
  const {
    containerStyle = {},
    theme,
    label,
    defaultLabel = '',
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    hideActionButton = false,
  } = props;

  const { styles, colors } = useStyles(theme);

  const [showModal, setShowModal] = useState(false);
  const formattedStartDate = startDate ? format(startDate, 'yyyy-MM-dd') : null;
  const formattedEndDate = endDate ? format(endDate, 'yyyy-MM-dd') : null;

  const displayStartDate = startDate ? format(startDate, 'MMM d yyyy ') : '';
  const displayEndDate = endDate ? ` - ${format(endDate, 'MMM d yyyy ')}` : '';
  const displayDate = (() => {
    if (startDate && !endDate) {
      return format(startDate, 'MMMM d yyyy');
    }
    return startDate && endDate ? displayStartDate + displayEndDate : '';
  })();

  const markedDates = (
    startDate && endDate
      ? eachDayOfInterval({
          start: startDate,
          end: endDate,
        })
      : []
  ).reduce((accum, current) => {
    return {
      ...accum,
      [format(current, 'yyyy-MM-dd')]: { marked: true },
    };
  }, {});

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
            {displayDate || defaultLabel || ''}
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
              <Calendar
                theme={{
                  todayTextColor: colors.PRIMARY,
                  textSectionTitleColor: colors.PRIMARY_TEXT,
                  textSectionTitleDisabledColor: colors.BORDER,
                  dayTextColor: colors.PRIMARY_TEXT,
                  textDisabledColor: colors.BORDER,
                  backgroundColor: colors.AREA_HIGHLIGHT,
                  calendarBackground: colors.AREA_HIGHLIGHT,
                  selectedDayTextColor: colors.AREA_HIGHLIGHT,
                  selectedDayBackgroundColor: colors.PRIMARY_TEXT,
                  dotColor: colors.PRIMARY,
                  selectedDotColor: colors.PRIMARY,
                  monthTextColor: colors.PRIMARY_TEXT,
                  arrowColor: colors.PRIMARY,
                  textMonthFontFamily: 'Heebo-Medium',
                }}
                markedDates={{
                  ...markedDates,
                  ...(formattedStartDate
                    ? {
                        [formattedStartDate]: {
                          selected: true,
                          marked: true,
                        },
                      }
                    : {}),
                  ...(formattedEndDate
                    ? {
                        [formattedEndDate]: {
                          selected: true,
                          marked: true,
                        },
                      }
                    : {}),
                }}
                onDayPress={(day) => {
                  const newDate = new Date(day.dateString);
                  // reset or start date
                  if ((startDate && endDate) || !startDate || !setEndDate) {
                    setStartDate(newDate);
                    if (setEndDate) {
                      setEndDate(null);
                    }
                  } else {
                    if (setEndDate) {
                      if (startDate > newDate) {
                        setEndDate(startDate);
                        setStartDate(newDate);
                      } else {
                        setEndDate(newDate);
                      }
                    }
                  }
                }}
              />
              {!hideActionButton && (
                <Button
                  containerStyle={styles.actionContainer}
                  onPress={() => {
                    if (setEndDate) {
                      setEndDate(null);
                    }

                    setStartDate(null);
                  }}
                  label={defaultLabel}
                  outline
                  theme={theme}
                />
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default DatePicker;
