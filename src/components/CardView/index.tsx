// src/components/CardView/index.tsx
import React, { useEffect, useState, useRef } from "react";
import { View, Text, Animated, TouchableWithoutFeedback, Image } from "react-native";
import Logo from "../../../assets/logo.png";
import { styles } from "./style";
import Divider from "../Divider";
import BuyButton from "../BuyButton";
import { CarModel } from "./props";
import { handleNextItem, handlePreviousItem, loadCarData } from "./actions";
import { CarAnimations } from "../../animations/CarAnimations";
import DraggableCar from "../DraggableCar";

export default function CardView() {
  const [carData, setCarData] = useState<CarModel | null>(null);
  const logoScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    (async () => {
      await loadCarData(8, setCarData);
    })();
  }, []);

  const onLogoPress = () => CarAnimations.bounce(logoScale);

  return (
    <View style={styles.imageContainer}>
      {/* Logo animado */}
      <View style={styles.logoContainer}>
        <TouchableWithoutFeedback onPress={onLogoPress}>
          <Animated.Image
            style={[styles.imageLogo, { transform: [{ scale: logoScale }] }]}
            source={Logo}
          />
        </TouchableWithoutFeedback>
      </View>

      <Divider />

      {/* Nome do carro (área fixa) */}
      <View style={styles.carNameContainer}>
        <Text style={styles.carBrand}>Lamborghini</Text>
        <Text style={styles.carName} numberOfLines={2} ellipsizeMode="tail">
          {carData?.carName}
        </Text>
      </View>

      {/* Componente de carro animado */}
      <View style={{ height: 300, alignItems: "center", justifyContent: "center" }}>
        <DraggableCar
          carData={carData}
          onNext={() => handleNextItem(carData, setCarData)}
          onPrev={() => handlePreviousItem(carData, setCarData)}
        />
      </View>

      <Divider />
      <BuyButton />

      <View style={styles.priceLabelContainer}>
        <Text style={styles.priceLabel}>{carData?.price}</Text>
      </View>
    </View>
  );
}
