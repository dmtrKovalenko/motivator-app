import * as React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import StyledText from '@ui/StyledText';
import Colors from '~/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

interface NumericKeyboardProps {
  onDelete: () => void;
  onFingerPrintRequest?: () => void;
  onNumberEnter: (number: number) => void;
}

const styles = StyleSheet.create({
  keyboard: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    height: 70,
    width: 70,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButton: {
    height: 70,
    width: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const KeyboardButton = (props: {
  number: number;
  onNumberEnter: NumericKeyboardProps['onNumberEnter'];
}) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      style={styles.keyboardButton}
      underlayColor={Colors.primaryColor}
      onPress={() => props.onNumberEnter(props.number)}
    >
      <StyledText disableMargin variant="title">
        {props.number}
      </StyledText>
    </TouchableHighlight>
  </View>
);

const NumericKeyboard: React.SFC<NumericKeyboardProps> = ({
  onDelete,
  onNumberEnter,
  onFingerPrintRequest,
}) => {
  return (
    <View style={styles.keyboard}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
        <KeyboardButton
          key={number}
          number={number}
          onNumberEnter={onNumberEnter}
        />
      ))}

      <View style={styles.buttonContainer}>
        {onFingerPrintRequest && (
          <TouchableHighlight
            underlayColor="#fa5d6a"
            style={styles.actionButton}
            onPress={onFingerPrintRequest}
          >
            <Ionicons name="ios-finger-print" color="#fa5d6a" size={48} />
          </TouchableHighlight>
        )}
      </View>

      <KeyboardButton number={0} onNumberEnter={onNumberEnter} />

      <View style={styles.buttonContainer}>
        <TouchableHighlight
          onPress={onDelete}
          style={styles.actionButton}
          underlayColor={Colors.primaryColor}
        >
          <Ionicons name="ios-backspace" color={Colors.textColor} size={36} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default NumericKeyboard;
