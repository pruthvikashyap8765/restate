import { SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native";

import { useGlobalContext } from "@/lib/global-provider";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { Card, FeaturedCard } from "@/components/PropertyCards";
import Filters from "@/components/Filters";
export default function Index() {

  
  

  return (
    <SafeAreaView>
      <View className="px-6"> 
        <View className="flex flex-row justify-between items-center mt-5">
          <View className="flex flex-row item-center gap-4">
            <Image source = {images.avatar} className="size-12 rounded-full"/>
            <View>
              <Text className = "text-xs text-black-100 font-rubik-medium">
                Good Morning
              </Text >
              <Text className = "text-black text-rubik-medium text-base text-s">
                Pruthvi
              </Text>
            </View>
            
          </View>
          <Image source={icons.bell} className='size-8' />
        </View>


        <Search/>
        <View className ="my-5 ">
          <View className ="flex flex-row justify-between items-center">
            <Text className = "text-xl font-rubik-bold text-black-300">Featured</Text>
            <TouchableOpacity>
              <Text className = "text-base font-rubik-bold text-primary">See All</Text>
            </TouchableOpacity>

            
          </View>

          <View className="flex flex-row gap-5 mt-5">
              <FeaturedCard onPress={() => {}}/>
              <FeaturedCard onPress={() => {}}/>
          </View>


          <View className ="flex flex-row justify-between items-center my-5">
            <Text className = "text-xl font-rubik-bold text-black-300">Our Recommendation</Text>
            <TouchableOpacity>
              <Text className = "text-base font-rubik-bold text-primary">See All</Text>
            </TouchableOpacity>

            
          </View>

          <Filters/>

          <View className="flex flex-row gap-5 mt-5">
              <Card onPress={() => {}}/>
              <Card onPress={() => {}}/>
          </View>



        </View>


        
        <Card onPress={() => {}}/>
      </View>

      
    </SafeAreaView>
  );
}
