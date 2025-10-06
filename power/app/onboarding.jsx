import { Image, Text, View, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles";
import { router } from "expo-router";



const Onboarding = () =>{

    setTimeout(() => {

        router.push('./onboarding2')
        
    },3000)


    return(

        <SafeAreaView style={styles.container}>

            <View style={{marginTop:Dimensions.get('screen').height*.15}}>

                <Text style={{fontFamily:"bold",color:"#001E63", fontSize:45}}>
                    Welcome To{'\n'}
                    <Text style={{color:'#FF0002', 
                        fontFamily:"extrabold"}}>Edu-Press</Text>
                    {'\n'}The #1 
                    Online School In The {'\n'}World...... 
                    
                </Text>

            </View>

            





        </SafeAreaView>
    )
}

export default Onboarding;