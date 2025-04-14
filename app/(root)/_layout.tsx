import { Redirect,Slot } from "expo-router";
import { useGlobalContext } from "@/lib/global-provider";
import { ActivityIndicator, SafeAreaView } from "react-native";

export default function AppLayout(){
    const {isLoggedIn, loading} = useGlobalContext();

    if(loading){
        return(
            <SafeAreaView className="bg-white h-full flex justify-center items-center">
                <ActivityIndicator size="large" className="text-primary-300" />
            </SafeAreaView>
        )
        
    }

    if(!isLoggedIn) return <Redirect href="/sign-in" />

    return <Slot />
    
}