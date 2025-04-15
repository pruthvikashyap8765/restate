import { Avatars, Client, Account,OAuthProvider } from 'react-native-appwrite';
import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from 'expo-web-browser';



export const config ={
    platform : 'com.jsm.restate',
    endpoint : process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId : process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client();

client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.platform!);

export const avatars = new Avatars(client);
export const account = new Account(client);


export async function login(){
    try {
        const redirectUri = Linking.createURL('/');

        const response = await account.createOAuth2Token(
            OAuthProvider.Google,
            redirectUri,
        )

        if(!response)throw new Error('Failed to Login');

        const browseResult = await openAuthSessionAsync(
            response.toString(),
            redirectUri,
        )

        if(browseResult.type != 'success')throw new Error('Failed to Login');

        const url = new URL(browseResult.url);


        const secret = url.searchParams.get('secret')?.toString();
        const userId = url.searchParams.get('userId')?.toString();

        if(!secret || !userId)throw new Error('Failed to Login');
        
        const session = await account.createSession(userId, secret);

        if(!session)throw new Error('Failed to Login');

        return true;
        

    } catch (error) {
        console.log(error);
    }
}


export async function logout(){
    try {
        await account.deleteSession('current');
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}


export async function getCurrentUser(){
    try{
        const response = await account.get();

        if(response.$id){
            const userAvatar = await avatars.getInitials(response.name);

            return {
                ...response,
                avatar: userAvatar,
            }
        } 
    }
    catch(error){
        console.error(error);
        return null;
    }
}