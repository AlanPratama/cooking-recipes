// HomeScreen.js
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { BellIcon, MagnifyingGlassIcon, UserGroupIcon } from "react-native-heroicons/outline"
import Categories from '../components/categories';
import axios from 'axios';
import Recipes from '../components/recipes';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

  const [activeCategory, setActiveCategory] = useState("Beef")
  const [categories, setCategories] = useState([])
  const [meals, setMeals] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    getCategories()
    getRecipes()
  }, [])

  const handleChangeCategory = (category) => {
    getRecipes(category)
    setActiveCategory(category)
    setMeals([])
  }

  const getCategories = async() => {
    try {
      const res = await axios.get("https://themealdb.com/api/json/v1/1/categories.php")
      
      if(res && res.data) {
        setCategories(res.data.categories)
      }

    } catch (error) {
      console.log("error: ", error.message);
    }
  }

  const getRecipes = async (category = "Beef") => {
    try {
      const res = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      
      if(res && res.data) {
        setMeals(res.data.meals)
      }

    } catch (error) {
      console.log("error: ", error.message);
    }
  }

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* AVATAR AND BELL */}

        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image source={require("../../assets/chef.png")} style={{ height: hp(5), width: hp(5.5) }} />
          <TouchableOpacity onPress={() => navigation.navigate("Founders")}><UserGroupIcon size={hp(4)} color={"#f472b6"}/></TouchableOpacity>
        </View>

        {/* GREETING AND PUNCHLINE */}
        <View className="mx-4 space-y-2 mb-2">
          {/* <Text style={{ fontSize: hp(1.7) }} className="text-neutral-600">Hello, </Text> */}
          <View>
            <Text style={{ fontSize: hp(3.8) }} className="font-bold capitalize text-neutral-600">Make your own food,</Text>
          </View>
          <Text style={{ fontSize: hp(3.8) }} className="font-bold capitalize text-neutral-600">
            stay at <Text className="text-pink-400">home</Text>
          </Text>
        </View>

        {/* SEARCH BAR */}
        {/* <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder='Search any recipe'
            placeholderTextColor={"gray"}
            style={{ fontSize: hp(1.7) }}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />

          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon size={hp(2.7)} strokeWidth={3} color={"gray"}/>
          </View>
        </View> */}

        {/* CATEGORIES */}
        <View>
          { categories.length > 0 && <Categories categories={categories} activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} /> }
        </View>

        {/* RECIPES */}
        <View>
            <Recipes meals={meals} activeCategory={activeCategory} categories={categories}/>
        </View>

      </ScrollView>
    </View>
  );
}
