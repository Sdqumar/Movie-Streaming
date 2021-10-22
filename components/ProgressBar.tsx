import React from "react"
import { View, ViewStyle } from "react-native"
import { COLORS, SIZES } from "../constants"
type props ={
    containerStyle:ViewStyle,
    barStyle:ViewStyle,
    barPercentage:string | number | undefined
}
export default ({containerStyle,barStyle,barPercentage}:props)=>{
    return(
        <View style={{...containerStyle}}>
            <View style={{
                position:'absolute',
                bottom:0,
                left:0,
                width:'100%',
                marginTop:SIZES.base,
                backgroundColor:COLORS.gray,
                ...barStyle
            }}></View>
            <View style={{
                position:'absolute',
                bottom:0,
                left:0,
                width:barPercentage,
                marginTop:SIZES.base,
                backgroundColor:COLORS.primary,
                ...barStyle
            }}></View>
        </View>
    )
}