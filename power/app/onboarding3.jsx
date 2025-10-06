import { Image, Text, View, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles";
import { router } from "expo-router";



const Onboarding3 = () =>{

    setTimeout(() => {

        router.push('./onboarding4')
        
    },3000)


    return(

        <SafeAreaView style={styles.container}>

            <View style={{marginTop:Dimensions.get('screen').height*.15}}>

                <Text style={{fontFamily:"semibold",color:"#001E63", fontSize:45}}>
                    Our App is designed to make learning{'\n'}fun, flexible,
                     and tailored to {'\n'} 
                    your needs.
 
                    
                </Text>

            </View>

            




        </SafeAreaView>
    )
}

export default Onboarding3;