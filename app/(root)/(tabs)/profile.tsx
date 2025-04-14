import { View, Text, TouchableOpacity , SafeAreaView, ScrollView, Image, ImageSourcePropType, Alert} from 'react-native'
import React from 'react'
import { logout } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { settings } from '@/constants/data'


interface settingsItemProps {
  icon: ImageSourcePropType,
  title: string,
  onPress: () => void,
  textStyle?: string,
  showArrow?: boolean
}

const SettingsItem = ({icon,title,onPress, textStyle, showArrow = true} : settingsItemProps) => (
  <TouchableOpacity className = {`flex flex-row items-center justify-between py-3`} onPress={onPress}>
    <View className='flex flex-row items-center gap-3'>
      <Image source = {icon} className='size-8 '/>
      <Text className={`font-rubik-medium text-lg text-black-300 ${textStyle}`}>{title}</Text>
    </View>
    {showArrow && <Image source={icons.rightArrow} className='size-5'/>}
  </TouchableOpacity>
)




const profile = () => {

  const{user, refetch} = useGlobalContext();

  const handleLogout = async () =>{
    const result = await logout();
    if(result){
      Alert.alert('Success', 'Logged out successfully');
      refetch();
    }
    else{
      Alert.alert('Error', 'An error occured while logging out')
    }
    
  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName="pb-32 px-7" showsVerticalScrollIndicator={false}>

        <View className='flex flex-row items-center justify-between mt-5'>
          <Text className='text-xl font-rubik-bold text-black-300'>Profile</Text>
          <Image source={icons.bell} className='size-8' />
        </View>

        <View className='flex flex-row justify-center mt-5'>
          <View className='flex flex-col items-center relative mt-5'>
            {/* <Image source={{uri: user?.avatar}} className='size-44 relative rounded-full' /> */}
            <Image source={images.avatar} className='size-44 relative rounded-full' />

            <TouchableOpacity className='absolute bottom-11 right-2'>
              <Image source={icons.edit} className='size-8' />
            </TouchableOpacity>
            <Text className='text-black-300 font-rubik-bold text-2xl mt-2'>{user?.name}</Text>
          </View>
        </View>


        <View className='mt-10'>
          <SettingsItem icon={icons.calendar} title='My Bookings' onPress={() => {}}/>
          <SettingsItem icon={icons.wallet} title='Payments' onPress={() => {}}/>
        </View>
        

        <View className='flex flex-col mt-5 border-t pt-5 border-primary-200'>
          {settings.slice(2).map((item, index) =>(
            <SettingsItem key = {index} icon = {item.icon} title = {item.title} onPress={() => {}}/>
          ))}
        </View>
        

        <View className='flex flex-col mt-5 border-t pt-5 border-primary-200'>
          <SettingsItem icon={icons.logout} title='Logout' textStyle='danger' showArrow={false} onPress={handleLogout}/>
        </View>


      </ScrollView>
       
    </SafeAreaView> 
  )
}

export default profile