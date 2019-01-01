import { Animated } from 'react-native';

type ShakingConfig = {
  prop: Animated.Value;
  times: number;
  value: number;
  duration: number;
};

export function createShakingAnimation({
  value,
  prop,
  times,
  duration,
}: ShakingConfig) {
  const animations: Animated.CompositeAnimation[] = [];

  for (let i = 1; i <= times; i++) {
    let toValue: number;

    if (i === times) {
      toValue = 0;
    } else {
      toValue = i % 2 === 0 ? -value : value;
    }

    animations.push(Animated.timing(prop, { toValue, duration }));
  }

  return Animated.sequence(animations)
}
