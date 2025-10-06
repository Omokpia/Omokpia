import { SafeAreaView } from "react-native-safe-area-context"

import { Image } from "react-native"



const Splash = () => {
    return (
        <SafeAreaView style={{backgroundColor:"white", flex:1, 
        alignItems:'center', justifyContent:'center'}}>


            <Image style={{height:54,width:300, alignSelf:'center'}} 
            source={require('../assets/images/logo.png')}/>

        </SafeAreaView>
    )
}

export default Splash