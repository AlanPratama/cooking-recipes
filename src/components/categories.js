import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { categoryData } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { CachedImage } from '../helpers/image'

export default function Categories({ categories, activeCategory, handleChangeCategory }) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="space-x-4"
            contentContainerStyle={{ paddingHorizontal: 15 }}
        >
            {categories.map((cat, i) => {
                let isActive = cat.strCategory == activeCategory
                let activeButtonClass = isActive ? " bg-pink-300 " : " bg-black/10 "
                return (
                    <TouchableOpacity
                        key={i}
                        onPress={() => handleChangeCategory(cat.strCategory)}
                        className="flex items-center space-y-1"
                    >
                        <View className={`rounded-full p-[6px] ${activeButtonClass }`}>
                            <Image 
                                source={{ uri: cat.strCategoryThumb }} style={{ width: hp(6), height: hp(6) }} 
                                className="rounded-full"
                            />
                            {/* <CachedImage
                                uri={cat.strCategoryThumb} 
                                style={{ width: hp(6), height: hp(6) }} 
                                className="rounded-full"
                            /> */}
                        </View>
                        <Text style={{ fontSize: hp(1.6) }} className="text-neutral-600">{cat.strCategory}</Text>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    </Animated.View>
  )
}