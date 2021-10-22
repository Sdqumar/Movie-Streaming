import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    Image,
    TouchableOpacity,
    Platform,
    StyleSheet
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, icons,  SIZES } from '../constants';
import ProgressBar from '../components/ProgressBar';



const MovieDetail = ({navigation,route}) => {
const [selectedMovie,setSelectedMovie] = useState(null)


useEffect(()=>{
const {selectedMovie}= route.params
setSelectedMovie(selectedMovie)
},[])

function renderHeaderBar(){
    return(
        <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent:'space-between',
          marginTop:Platform.OS === 'ios'?40:30,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Back */}
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            justifyContent: "center",
              alignItems: "center",
              borderRadius:15,
              backgroundColor:COLORS.transparentBlack
          }}
          onPress={()=>navigation.goBack()}
        >
          <Image
            source={icons.left_arrow}
            style={{
              height: 15,
              width: 15,
              tintColor:COLORS.white
            }}
          />
        </TouchableOpacity>
        {/* Share */}

        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            justifyContent: "center",
              alignItems: "center",
              borderRadius:15,
              backgroundColor:COLORS.transparentBlack
          }}
        >
          <Image
            source={icons.airplay}
            style={{
              height: 15,
              width: 15,
              tintColor:COLORS.white
            }}
          />
        </TouchableOpacity>
      </View>
    )
}
function renderHeaderSection(){
    return(
        <ImageBackground source={selectedMovie?.details?.image}
        resizeMode='cover'
        style={{width:'100%',
        height:SIZES.height < 400 ? SIZES.height * 0.9 : SIZES.height * 0.75
    }}
        
    >
<View style={{flex:1}}>
    {renderHeaderBar()}

    <View style={{
        flex:1,justifyContent:'flex-end'
    }}>
        <LinearGradient start={{x:0,y:0}}
        end={{x:0,y:1}}
        colors={['transparent', '#000']}
        style={{width:'100%',height:150,alignItems:'center',justifyContent:'flex-end'}}
        >
{/* Season */}
<Text style={{color:COLORS.white,fontSize:SIZES.body4}}>
{selectedMovie?.details?.season}
</Text>
{/* Name */}

<Text style={{color:COLORS.white,fontSize:SIZES.h1, marginTop:SIZES.base}}>
{selectedMovie?.name}
</Text>
        </LinearGradient>
    </View>
</View>
    </ImageBackground>
    )
}

function renderCategory(){
    return(
        <View style={{
            flexDirection:'row',
            marginTop:SIZES.base,
            alignItems:'center',
            justifyContent:'center'
        }}>
            {/* Age*/}
            <View style={[
                styles.categoryContainer,
                {marginLeft:0}
            ]}>
                <Text style={{
                    color:COLORS.white,
                    fontSize:SIZES.h4
                }}>
                    {selectedMovie?.details?.age}
                </Text>
            </View>
            {/* Genre*/}
            <View style={[
                styles.categoryContainer,
                {paddingHorizontal:SIZES.padding}
            ]}>
                <Text style={{
                    color:COLORS.white,
                    fontSize:SIZES.h4
                }}>
                    {selectedMovie?.details?.genre}
                </Text>
            </View>
            {/* Ratings*/}
            <View style={[
                styles.categoryContainer
            ]}>
                <Image source={icons.star}
                style={{
                    width:15, height:15
                }}
                />
                <Text style={{
                    color:COLORS.white,
                    fontSize:SIZES.h4,
                    marginLeft:SIZES.base
                }}>
                    {selectedMovie?.details?.ratings}
                </Text>
            </View>
        </View>
    )
}

function renderMovieDetails(){
    return(
        <View style={{
            paddingHorizontal:SIZES.padding,
            marginTop:SIZES.padding,
            justifyContent:'space-between'
        }}>
            {/* Title,running time & progress bar */}
        <View>
            <View
            style={{flexDirection:'row'}}
            >
                <Text style={{
                    flex:1,
                    color:COLORS.white,
                    fontSize:SIZES.h4
                }}>
                {selectedMovie?.details?.currentEpisode}
                </Text>
                
                <Text style={{
                    color:COLORS.lightGray,
                    fontSize:SIZES.h4
                }}>
                {selectedMovie?.details?.runningTime}
                </Text>
            </View>

            {/* ProgressBar */}
            <ProgressBar containerStyle={{marginTop:SIZES.radius}}
            barStyle={{height:5,borderRadius:3}}
            barPercentage={selectedMovie?.details?.progress}
            />
        </View>
            {/* watch */}
            <TouchableOpacity style={{height:60,alignItems:'center',justifyContent:'center',
            borderRadius:15,backgroundColor:COLORS.primary,
            marginTop:Platform.OS =='android'? SIZES.padding *2 :0
        }
        }
        onPress={()=>navigation.navigate('Movie')}
        >

            <Text style={{
                color:COLORS.white,
                fontSize:SIZES.h2
            }}>
            {selectedMovie?.details?.progress == '0%' ? 'WATCH NOW': "CONTINUE WATCH"}
            </Text>
            </TouchableOpacity>
        </View>
    )
}
    return (
        <ScrollView contentContainerStyle={{flex:1,backgroundColor:COLORS.black}}
        style={{backgroundColor:COLORS.black}}
        >
            {/* Header */}
            {renderHeaderSection()}
            {/* Category & rating */}
            {renderCategory()}
            {/* Movie Details */}
            {renderMovieDetails()}
        </ScrollView>
    )
}

export default MovieDetail;


const styles= StyleSheet.create({
categoryContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:SIZES.base,
    paddingHorizontal:SIZES.base,
    paddingVertical:8,
    borderRadius:SIZES.base
,
backgroundColor:COLORS.gray1
}
})