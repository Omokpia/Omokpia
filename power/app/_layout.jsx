import { Stack } from "expo-router";
import Splash from "./splash";
import { useEffect, useState } from "react";
import {useFonts} from 'expo-font';




export default function RootLayout() {

  const [showSplash, setShowSplash] = useState(true)

  const [loaded, error] = useFonts( {

    regular: require('../assets/fonts/Exo-Regular.ttf'),
    bold: require('../assets/fonts/Exo-Bold.ttf'),
    light: require('../assets/fonts/Exo-Light.ttf'),
    medium: require('../assets/fonts/Exo-Medium.ttf'),
    semibold: require('../assets/fonts/Exo-SemiBold.ttf'), 
    italic: require('../assets/fonts/Exo-Italic.ttf'),
    extrabold: require('../assets/fonts/Exo-ExtraBold.ttf'),
    extralight: require('../assets/fonts/Exo-ExtraLight.ttf'),
  })

  useEffect(() =>{

    setTimeout(() =>{

      setShowSplash(false)

    }, 5000)

  })

  if(showSplash){
    return<Splash/>
  }


  return(

    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="(auth)"/>


    </Stack>

  )
}
