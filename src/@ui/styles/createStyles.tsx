import React from 'react';
import { StyleSheet } from 'react-native';
import { Omit } from '~/stores/injectStore';
import { ThemeContext } from './ThemeContext';
import { Theme } from './Theme';

type StyleFn<T> = (theme: Theme) => StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>;

type BaseStyledComponentProps<P, TStyleFn extends StyleFn<P>> = {
  styles: ReturnType<TStyleFn>;
};

export interface WithStyles<TStyleFn extends StyleFn<any>> {
  styles: ReturnType<TStyleFn>;
}

export const styled = <
  TStyles,
  TFn extends (theme: Theme) => StyleSheet.NamedStyles<TStyles> | StyleSheet.NamedStyles<any>
>(
  fn: TFn
) => fn;

export const createStylesWithoutArgument = <
  K extends ReturnType<T>,
  T extends () => StyleSheet.NamedStyles<K> | StyleSheet.NamedStyles<any>
>(
  fn: T
) => fn;

export function withStyles<
  TStyle,
  TStyleFn extends StyleFn<TStyle>,
  TProps extends BaseStyledComponentProps<TStyle, TStyleFn>
>(makeStyle: TStyleFn) {
  return (
    Component: React.ComponentType<TProps>
  ): React.SFC<Omit<TProps, 'styles'>> => props => {
    return (
      <ThemeContext.Consumer>
        {theme => {
          const styles = StyleSheet.create(makeStyle(theme));
          return <Component styles={styles} {...props as any} />;
        }}
      </ThemeContext.Consumer>
    );
  };
}
