import React from "react"
import { Image, Text, View } from "react-native"
import { COLORS, SIZES } from "../constants"

const CurrencyLabel = ({icon,currency,code})=>{
    return(
    <View style={{flexDirection:'row'}}>
        <Image style={{
            width:25,
            height:25,
            marginTop:5
        }}
        source={icon}
        resizeMethod='auto'
        />
        <View style={{marginLeft:SIZES.base}}>
        <Text style={{fontSize:SIZES.h4}}>{currency}</Text>
        <Text style={{fontSize:SIZES.body4,
        color:COLORS.gray
        }}>{code}</Text>
        </View>
    </View>
)
}

export default CurrencyLabel