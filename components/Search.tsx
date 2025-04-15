import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams, usePathname } from 'expo-router'
import icons from '@/constants/icons'
import { useDebouncedCallback } from 'use-debounce'
const Search = () => {

    const path = usePathname();
    const params = useLocalSearchParams<{query?:string}>();
    const [search,setSearch] = useState(params.query);

    const debouncedSearch = useDebouncedCallback((text:string) => router.setParams({query:text}), 500)


    const handleSearch = (text:string) => {
        setSearch(text);
        debouncedSearch(text)
    }


  return (
    <View className = 'flex flex-row items-center justify-betweem w-full px-6 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-4'>
      <View className = 'flex flex-row items-center gap-2 justify-start z-50 flex-1'>
        <Image source = {icons.search} className = 'size-5' />
        <TextInput
            placeholder = "Search for anything"
            placeholderTextColor = "#8C8E98"
            value = {search}
            onChangeText = {handleSearch}
            className = 'flex-1 text-sm text-black-300 font-rubik-regular'
        />
      </View>
      <TouchableOpacity>
        <Image source = {icons.filter} className = 'size-5' />
      </TouchableOpacity>
      
    </View>
  )
}

export default Search