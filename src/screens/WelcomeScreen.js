import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const ring1Padding = useSharedValue(0);
  const ring2Padding = useSharedValue(0);

  const navigation = useNavigation();

  useEffect(() => {
    ring1Padding.value = 0;
    ring2Padding.value = 0;

    setTimeout(
      () => (ring1Padding.value = withSpring(ring1Padding.value + hp(5))),
      100
    );
    setTimeout(
      () => (ring2Padding.value = withSpring(ring2Padding.value + hp(5.5))),
      300
    );

    setTimeout(() => navigation.navigate("Home"), 2500)
  }, []);

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-pink-500">
      <StatusBar style="light" />

      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring2Padding }}
      >
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{ padding: ring1Padding }}
        >
          <Image
            source={require("../../assets/chef.png")}
            style={{ width: hp(20), height: hp(20) }}
          />
        </Animated.View>
      </Animated.View>

      <View className="flex items-center space-y-2">
        <Text
          className="font-bold text-white tracking-widest"
          style={{ fontSize: hp(5.8) }}
        >
          Cooking Fun
        </Text>
        <Text
          className="font-medium text-white tracking-widest capitalize mb-6"
          style={{ fontSize: hp(3) }}
        >
          Food is always right!
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} className="bg-white px-2 py-1 rounded-md">
          <Text className="text-pink-500 font-medium" style={{ fontSize: hp(2.5) }}>Start Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
