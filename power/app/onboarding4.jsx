import { Image, Text, View, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles";
import { router } from "expo-router";



const Onboarding4 = () =>{

    setTimeout(() => {

        router.push('./home-page')
        
    },3000)


    return(

        <SafeAreaView style={styles.container}>

            <View style={{marginTop:Dimensions.get('screen').height*.15}}>

                <Text style={{fontFamily:"semibold",color:"#001E63", fontSize:45}}>
                    Get started with your learning journey 
                    today and unlock a world of possibilities!!!
                  
                    
                </Text>

            </View>

            




        </SafeAreaView>
    )
}

export default Onboarding4;