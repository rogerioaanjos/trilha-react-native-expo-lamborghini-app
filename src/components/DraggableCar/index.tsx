// src/components/DraggableCar.tsx
import React, { useRef } from "react";
import { Animated, Image } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import { CarModel } from "../CardView/props";
import { CarAnimations } from "../../animations/CarAnimations";

interface DraggableCarProps {
  carData: CarModel | null;
  onNext: () => Promise<void>;
  onPrev: () => Promise<void>;
}

export default function DraggableCar({ carData, onNext, onPrev }: DraggableCarProps) {
  const translateX = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = async (event: any) => {
    if (event.nativeEvent.state === State.END) {
      const deltaX = event.nativeEvent.translationX;

      if (deltaX < -50 && carData?.id && carData.id < 10) {
        await CarAnimations.slideAndFade(translateX, fadeAnim, onNext, "left");
      } else if (deltaX > 50 && carData?.id && carData.id > 1) {
        await CarAnimations.slideAndFade(translateX, fadeAnim, onPrev, "right");
      } else {
        Animated.spring(translateX, { toValue: 0, useNativeDriver: true }).start();
      }
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animated.View
        style={[
          { alignItems: "center", justifyContent: "center", opacity: fadeAnim },
          CarAnimations.dragStyle(translateX),
        ]}
      >
        <Image
          style={{ width: 300, height: 180, resizeMode: "contain" }}
          source={carData ? { uri: `${CAR_ASSETS_BASE_URL}${carData.id}.png` } : undefined}
        />
      </Animated.View>
    </PanGestureHandler>
  );
}
