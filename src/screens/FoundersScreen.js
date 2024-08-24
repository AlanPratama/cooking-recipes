import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function FoundersScreen() {
  const navigation = useNavigation()
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <View className="flex flex-row justify-start items-center pt-14">
      <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full ml-5 bg-pink-400 mr-4"
        >
          <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fff" />
        </TouchableOpacity>
          <Text style={{ fontSize: hp(3) }} className="font-bold">Our Founders</Text>
      </View>

      <View className="flex flex-wrap flex-row justify-center items-center mt-6">
        <View className="px-4 my-4">
          <View className="bg-pink-200 rounded-xl pb-5">
            <Image  source={require("../../assets/chef1.png")} style={{ height: hp(18), width: hp(18) }} />
          </View>
          <View className="bg-white rounded-lg -mt-5 p-2">
            <Text className="font-semibold" style={{ fontSize: hp(1.9) }}>Alzahra Yuslia</Text>
            <Text>XII - PPLG 2</Text>
          </View>
        </View>

        <View className="px-4 my-4">
          <View className="bg-pink-200 rounded-xl pb-5">
            <Image  source={require("../../assets/chef2.png")} style={{ height: hp(18), width: hp(18) }} />
          </View>
          <View className="bg-white rounded-lg -mt-5 p-2">
            <Text className="font-semibold" style={{ fontSize: hp(1.9) }}>Kalea Idzni Aulia</Text>
            <Text>XII - PPLG 2</Text>
          </View>
        </View>

        <View className="px-4 my-4">
          <View className="bg-pink-200 rounded-xl pb-5">
            <Image  source={require("../../assets/chef3.png")} style={{ height: hp(18), width: hp(18) }} />
          </View>
          <View className="bg-white rounded-lg -mt-5 p-2">
            <Text className="font-semibold" style={{ fontSize: hp(1.9) }}>Kurnia Lestari</Text>
            <Text>XII - PPLG 2</Text>
          </View>
        </View>

      </View>

    </View>
  )
}