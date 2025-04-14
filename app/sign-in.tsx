import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { login } from '@/lib/appwrite'


const SignIn = () => {

  const handleLogin = async () =>{
    const result = await login();

    if(result){
      console.log('Login Success');
    }
    else{
      Alert.alert('Error','Failed to Login')
    }
  }


  return (
    <SafeAreaView className='bg-white h-full'> {/*SafeAreaView is a component that ensures the content is safely fit inside the borders of your screen*/}
      <ScrollView contentContainerClassName="h-full"> {/* Allows the user to scroll the content */}
        <Image source={images.onboarding} className='w-full h-4/6' resizeMode = "contain"/>
        <View className='px-10'> {/* View in react native is just like a regular div in html */}
          <Text className = "text-base text-center uppercase font-rubik text-black-200">
            Welcome to ReState
          </Text>
          <Text className = "text-2xl text-center font-rubik-bold text-black-300  mt-2s">
            <Text>Let's Get You Closer to {'\n'}
               <Text className = "text-primary">Your Ideal home</Text>
            </Text>
          </Text>
          <Text className = "text-lg text-center font-rubik text-black-200 mt-10">
            Login to ReState with Google
          </Text>

          <TouchableOpacity className = "bg-white shadow-md shadow-zinc-300 rounded-full py-4 px-6 mt-6"> {/* TouchableOpacity is like Button in HTML*/}
            <View className = "flex flex-row items-center justify-center gap-4">
              <Image source={icons.google} className = "w-6 h-6" resizeMode = "contain"/>
              <Text className = "text-black-300 font-rubik-bold text-lg">
                SignUp with Google
              </Text>
            </View>
              
              
              
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
