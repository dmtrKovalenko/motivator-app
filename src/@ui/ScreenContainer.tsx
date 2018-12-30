import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { Header } from 'react-navigation';

type ScreenContainerProps = {
  scroll?: boolean;
  avoidKeyboard?: boolean;
  style?: StyleSheet.NamedStyles<any>;
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  fullWidthContainer: {
    flexGrow: 1,
  },
});

const ScreenContainer: React.SFC<ScreenContainerProps> = ({
  scroll,
  avoidKeyboard,
  children,
  ...props
}) => {
  const ContainerComponent = avoidKeyboard ? KeyboardAvoidingView : View;

  if (!scroll) {
    return (
      <ContainerComponent
        {...props}
        children={children}
        style={[props.style, styles.screenContainer]}
      />
    );
  }

  return (
    <ContainerComponent
      {...props}
      behavior="padding"
      style={[props.style, styles.fullWidthContainer]}
    >
      <ScrollView
        style={[styles.fullWidthContainer]}
        contentContainerStyle={[
          styles.fullWidthContainer,
          // remove flex property
          { ...styles.screenContainer, flex: undefined },
        ]}
      >
        {children}
      </ScrollView>
    </ContainerComponent>
  );
};

export default ScreenContainer;
