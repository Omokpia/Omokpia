import { SafeAreaView } from "react-native-safe-area-context"
import { Text, View, Image, TouchableOpacity, ScrollView} from "react-native"




const HomePage = () => {
    return(
        <SafeAreaView style={{paddingHorizontal:"10%", backgroundColor:"white", flex:1,}}>
            <ScrollView>

            <View style={{alignItems:'center',marginBottom:25}}>
                <Image style={{height:150, width:450}} 
                source={require('../../assets/images/girl.png')}/>
                <Text style={{position:"absolute", top:45, left:25,
                     fontFamily:"bold", fontSize:20}}>
                        Build Skills with{'\n'}Online Course</Text>

            </View>

            <View>
                <Text style={{fontFamily:"semibold", fontSize:20}}>Categories</Text>
                <Text  style={{fontFamily:"regular", fontSize:10}}>
                    Explore our Popular Categories</Text>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between',
             marginTop:20}}>
                <TouchableOpacity style={{backgroundColor:"#FFE8E8",
                 height:100, width:150, borderRadius:10,
                  alignItems:'center', justifyContent:'space-evenly'}}>
                    <Image style={{height:20, width:20, alignSelf:"center"}}
                     source={require('../../assets/images/art1.png')}/>
                    <Text>Art & Design</Text>
                    <Text style={{fontFamily:"regular", fontSize:10}}>38 Courses</Text>
                </TouchableOpacity>
            </View>

            
            <View style={{flexDirection:'row', justifyContent:'space-between',
             marginTop:20, position:"absolute", top:220, right:25,}}>
                <TouchableOpacity style={{backgroundColor:"#FFE8E8",
                 height:100, width:150, borderRadius:10,
                  alignItems:'center', justifyContent:'space-evenly'}}>
                    <Image style={{height:20, width:20, alignSelf:"center"}}
                     source={require('../../assets/images/develop.png')}/>
                    <Text>Development</Text>
                    <Text style={{fontFamily:"regular", fontSize:10}}>38 Courses</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between',
             marginTop:20}}>
                <TouchableOpacity style={{backgroundColor:"#FFE8E8",
                 height:100, width:150, borderRadius:10,
                  alignItems:'center', justifyContent:'space-evenly'}}>
                    <Image style={{height:20, width:20, alignSelf:"center"}}
                     source={require('../../assets/images/comm.png')}/>
                    <Text>Communication</Text>
                    <Text style={{fontFamily:"regular", fontSize:10}}>38 Courses</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between',
             marginTop:20, position:"absolute", top:340, right:25,}}>
                <TouchableOpacity style={{backgroundColor:"#FFE8E8",
                 height:100, width:150, borderRadius:10,
                  alignItems:'center', justifyContent:'space-evenly'}}>
                    <Image style={{height:20, width:20, alignSelf:"center"}}
                     source={require('../../assets/images/video.png')}/>
                    <Text>Videography</Text>
                    <Text style={{fontFamily:"regular", fontSize:10}}>38 Courses</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between',
             marginTop:20}}>
                <TouchableOpacity style={{backgroundColor:"#FFE8E8",
                 height:100, width:150, borderRadius:10,
                  alignItems:'center', justifyContent:'space-evenly'}}>
                    <Image style={{height:20, width:20, alignSelf:"center"}}
                     source={require('../../assets/images/photo.png')}/>
                    <Text>Photography</Text>
                    <Text style={{fontFamily:"regular", fontSize:10}}>38 Courses</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between',
             marginTop:20, position:"absolute", top:460, right:25,}}>
                <TouchableOpacity style={{backgroundColor:"#FFE8E8",
                 height:100, width:150, borderRadius:10,
                  alignItems:'center', justifyContent:'space-evenly'}}>
                    <Image style={{height:20, width:20, alignSelf:"center"}}
                     source={require('../../assets/images/market.png')}/>
                    <Text>Marketing</Text>
                    <Text style={{fontFamily:"regular", fontSize:10}}>38 Courses</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between',
             marginTop:20}}>
                <TouchableOpacity style={{backgroundColor:"#FFE8E8",
                 height:100, width:150, borderRadius:10,
                  alignItems:'center', justifyContent:'space-evenly'}}>
                    <Image style={{height:20, width:20, alignSelf:"center"}}
                     source={require('../../assets/images/content.png')}/>
                    <Text>Content Writing</Text>
                    <Text style={{fontFamily:"regular", fontSize:10}}>38 Courses</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between',
             marginTop:20, position:"absolute", top:580, right:25,}}>
                <TouchableOpacity style={{backgroundColor:"#FFE8E8",
                 height:100, width:150, borderRadius:10,
                  alignItems:'center', justifyContent:'space-evenly'}}>
                    <Image style={{height:20, width:20, alignSelf:"center"}}
                     source={require('../../assets/images/finance.png')}/>
                    <Text>Finance</Text>
                    <Text style={{fontFamily:"regular", fontSize:10}}>38 Courses</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between',
             marginTop:20}}>
                <TouchableOpacity style={{backgroundColor:"#FFE8E8",
                 height:100, width:150, borderRadius:10,
                  alignItems:'center', justifyContent:'space-evenly'}}>
                    <Image style={{height:20, width:20, alignSelf:"center"}}
                     source={require('../../assets/images/science.png')}/>
                    <Text>Science</Text>
                    <Text style={{fontFamily:"regular", fontSize:10}}>38 Courses</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between',
             marginTop:20, position:"absolute", top:700, right:25,}}>
                <TouchableOpacity style={{backgroundColor:"#FFE8E8",
                 height:100, width:150, borderRadius:10,
                  alignItems:'center', justifyContent:'space-evenly'}}>
                    <Image style={{height:20, width:20, alignSelf:"center"}}
                     source={require('../../assets/images/art1.png')}/>
                    <Text>Network</Text>
                    <Text style={{fontFamily:"regular", fontSize:10}}>38 Courses</Text>
                </TouchableOpacity>
            </View>
            

            <View style={{marginTop:50, marginBottom:20}}>
                <Text style={{fontFamily:"semibold", fontSize:20}}>Top Featured Courses</Text>
                <Text  style={{fontFamily:"regular", fontSize:10}}>
                    Explore our Popular Courses</Text>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between',
             marginTop:20}}>
                <TouchableOpacity style={{backgroundColor:"#C5D8F5",
                 height:300, width:250, borderRadius:15,
                  alignItems:'center', justifyContent:'space-evenly'}}>
                    <Image style={{height:150, width:250, alignSelf:"center",
                     top:-25, borderTopLeftRadius:15, borderTopRightRadius:15}}
                     source={require('../../assets/images/foto.png')}/>
                     
                    <Text style={{fontFamily:"semibold",fontSize:20,
                        paddingHorizontal:"5%", bottom:25}}>
                            LEARN MORE ABOUT PHOTOGRAPHY IN THREE(3) MONTHS</Text>
                    <TouchableOpacity style={{backgroundColor:"white",
                     height:25, width:100, borderRadius:10,
                       position:"absolute", bottom:15, right:15}}>       
                    <Text style={{fontFamily:"regular",color:"black",fontStyle:"italic", 
                        fontSize:15, left:15, top:2}}>view more</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between',
             marginTop:20}}>
                <TouchableOpacity style={{backgroundColor:"#C5D8F5",
                 height:300, width:250, borderRadius:15,
                  alignItems:'center', justifyContent:'space-evenly'}}>
                    <Image style={{height:150, width:250, alignSelf:"center",
                     top:-25, borderTopLeftRadius:15, borderTopRightRadius:15}}
                     source={require('../../assets/images/design.png')}/>
                     
                    <Text style={{fontFamily:"semibold",fontSize:20,
                        paddingHorizontal:"5%", bottom:25}}>
                            LEARN MORE ABOUT WEB DESIGN IN THREE(3) MONTHS</Text>
                    <TouchableOpacity style={{backgroundColor:"white",
                     height:25, width:100, borderRadius:10,
                       position:"absolute", bottom:15, right:15}}>       
                    <Text style={{fontFamily:"regular",color:"black",fontStyle:"italic", 
                        fontSize:15, left:15, top:2}}>view more</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between',
             marginTop:20}}>
                <TouchableOpacity style={{backgroundColor:"#C5D8F5",
                 height:300, width:250, borderRadius:15,
                  alignItems:'center', justifyContent:'space-evenly'}}>
                    <Image style={{height:150, width:250, alignSelf:"center",
                     top:-25, borderTopLeftRadius:15, borderTopRightRadius:15}}
                     source={require('../../assets/images/biz.png')}/>
                     
                    <Text style={{fontFamily:"semibold",fontSize:20,
                        paddingHorizontal:"5%", bottom:25}}>
                            LEARN MORE ABOUT BUSINESS IN THREE(3) MONTHS</Text>
                    <TouchableOpacity style={{backgroundColor:"white",
                     height:25, width:100, borderRadius:10,
                       position:"absolute", bottom:15, right:15}}>       
                    <Text style={{fontFamily:"regular",color:"black",fontStyle:"italic", 
                        fontSize:15, left:15, top:2}}>view more</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between',
             marginTop:20}}>
                <TouchableOpacity style={{backgroundColor:"#C5D8F5",
                 height:300, width:250, borderRadius:15,
                  alignItems:'center', justifyContent:'space-evenly'}}>
                    <Image style={{height:150, width:250, alignSelf:"center",
                     top:-25, borderTopLeftRadius:15, borderTopRightRadius:15}}
                     source={require('../../assets/images/mobile.png')}/>
                     
                    <Text style={{fontFamily:"semibold",fontSize:20,
                        paddingHorizontal:"5%", bottom:25}}>
                            LEARN MORE ABOUT MOBILE APP DEVELOPMENT IN THREE(3) MONTHS</Text>
                    <TouchableOpacity style={{backgroundColor:"white",
                     height:25, width:100, borderRadius:10,
                       position:"absolute", bottom:8, right:15}}>       
                    <Text style={{fontFamily:"regular",color:"black",fontStyle:"italic", 
                        fontSize:15, left:15, top:2}}>view more</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>





            


            
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomePage;



