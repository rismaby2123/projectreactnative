import { View, Text, Image } from 'react-native';
import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Lottieview from "lottie-react-native"
import Animated from 'react-native-reanimated';
import { useNavigation } from 'expo-router';

export default function WelcomeScreen() {
  const animation = useRef(null);
  const navigation = useNavigation(null);
  return (
    <View className="bg-[#f64e32] flex-1 justify-center items-center space-y-10 relative">
      <Image source={require("../../assets/images/baground.gif")} />
    </View>
  );
}