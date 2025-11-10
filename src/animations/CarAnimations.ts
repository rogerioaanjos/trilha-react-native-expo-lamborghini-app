// src/animations/CarAnimations.ts
import { Animated } from "react-native";

export class CarAnimations {
  static async slideAndFade(
    translateX: Animated.Value,
    fadeAnim: Animated.Value,
    nextCarCallback: () => Promise<void>,
    direction: "left" | "right"
  ) {
    return new Promise<void>((resolve) => {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: direction === "left" ? -300 : 300,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start(async () => {
        await nextCarCallback();
        translateX.setValue(direction === "left" ? 300 : -300);
        fadeAnim.setValue(0);

        Animated.parallel([
          Animated.timing(translateX, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }),
        ]).start(() => resolve());
      });
    });
  }

  static bounce(logoScale: Animated.Value) {
    Animated.sequence([
      Animated.spring(logoScale, { toValue: 1.3, friction: 3, useNativeDriver: true }),
      Animated.spring(logoScale, { toValue: 1, friction: 3, useNativeDriver: true }),
    ]).start();
  }

  static dragStyle(translateX: Animated.Value) {
    return {
      transform: [
        { translateX },
        {
          scale: translateX.interpolate({
            inputRange: [-200, 0, 200],
            outputRange: [0.8, 1, 0.8],
            extrapolate: "clamp",
          }),
        },
        {
          rotate: translateX.interpolate({
            inputRange: [-200, 0, 200],
            outputRange: ["-8deg", "0deg", "8deg"],
            extrapolate: "clamp",
          }),
        },
      ],
    };
  }
}
