import { Image, Text, View, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles";
import { router } from "expo-router";



const Onboarding2 = () =>{

    setTimeout(() => {

        router.push('./onboarding3')
        
    },3000)


    return(

        <SafeAreaView style={styles.container}>

            <View style={{marginTop:Dimensions.get('screen').height*.15}}>

                <Text style={{fontFamily:"semibold",color:"#001E63", fontSize:45}}>
                    Dive into interactive lessons,{'\n'} 
                    explore new subjects, and level up your skills......
                    
                </Text>

            </View>

            





        </SafeAreaView>
    )
}

export default Onboarding2;