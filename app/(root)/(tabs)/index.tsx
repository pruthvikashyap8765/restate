import { Text, View } from "react-native";

import { useGlobalContext } from "@/lib/global-provider";

export default function Index() {

  
  

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-4xl font-bold font-rubik my-10">Welcome to ReState</Text>


      
    </View>
  );
}
