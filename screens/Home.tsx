import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, icons, images, SIZES } from '../constants';


function renterHeader(){
    return(
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            paddingHorizontal:SIZES.padding
        }}>
            {/* Profile */}
            <TouchableOpacity style={{
                width:50,
                height:50,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Image source={images.profile_photo} style={{
                    borderRadius:20,
                    height:30,
                    width:30
                }}/>
            </TouchableOpacity>
            {/* Screen Mirror */}

            <TouchableOpacity style={{
                width:50,
                height:50,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Image source={icons.airplay} style={{
                    height:23,
                    width:23,
                    tintColor:COLORS.primary
                }}/>
            </TouchableOpacity>
        </View>
    )
}

const Home = ({ navigation }) => {
    return (
<SafeAreaView style={{backgroundColor:COLORS.black,flex:1}}>
        {renterHeader()}
</SafeAreaView>
    )
}

export default Home;