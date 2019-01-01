import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleProp,
  ViewStyle,
} from 'react-native';

type ScreenContainerProps = {
  scroll?: boolean;
  avoidKeyboard?: boolean;
  centered?: boolean;
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
  centered,
  ...props
}) => {
  const ContainerComponent = avoidKeyboard ? KeyboardAvoidingView : View;
  const customStyles: StyleProp<ViewStyle> = [
    centered && { alignItems: 'center' },
  ];

  if (!scroll) {
    return (
      <ContainerComponent
        {...props}
        children={children}
        style={[props.style, styles.screenContainer, ...customStyles]}
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
          ...customStyles
        ]}
      >
        {children}
      </ScrollView>
    </ContainerComponent>
  );
};

export default ScreenContainer;
