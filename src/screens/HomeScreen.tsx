import React from 'react';
import { observer } from 'mobx-react';
import AuthStore from '~/stores/AuthStore';
import StyledText from '@ui/StyledText';
import { StyleSheet } from 'react-native';
import ScreenContainer from '@ui/ScreenContainer';
import screen from '~/components/screen';

const styles = StyleSheet.create({});

type Props = {
  navigationStore: AuthStore;
};

const WeightScreen = (props: Props) => {
  return (
    <ScreenContainer>
      <StyledText align="center"> Yeeeeey </StyledText>
    </ScreenContainer>
  );
};

WeightScreen.navigationOptions = {
  title: 'Sobaka',
};

export default screen("Your weight")(observer(WeightScreen));
