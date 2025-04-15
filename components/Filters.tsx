import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { categories } from '@/constants/data';

const Filters = () => {

    const params = useLocalSearchParams<{query?:string}>();

    const [selectedCategory, setSelectedCategory] = useState(params.filter || 'All')

    const handleCategory = (category:string) => {}
    
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mb-2'>
        {categories.map((category, index) => (
            <TouchableOpacity key={index} className= 'flex flex-col items-start mr-4 px-4 py-2 rounded-full bg-white' onPress = {() => handleCategory(category.category)}>
                <Text>{category.title}</Text>
            </TouchableOpacity>
        ))}
    </ScrollView>
  )
}

export default Filters