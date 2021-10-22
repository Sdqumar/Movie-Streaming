import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  ImageBackground,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Profiles from "../components/Profiles";
import ProgressBar from "../components/ProgressBar";
import { COLORS, dummyData, icons, images, SIZES } from "../constants";

const Home = ({ navigation }) => {
    const newSeasonScrollX = useRef(new Animated.Value(0)).current;

    function renterHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Profile */}
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={images.profile_photo}
            style={{
              borderRadius: 20,
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>
        {/* Screen Mirror */}

        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={icons.airplay}
            style={{
              height: 23,
              width: 23,
              tintColor: COLORS.primary,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderNewSeasonSecion() {
   
    return (
      <Animated.FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        contentContainerStyle={{
          marginTop: SIZES.radius,
        }}
        data={dummyData.newSeason}
        keyExtractor={(item) => `${item.name}`}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: newSeasonScrollX,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate("MovieDetail", { selectedMovie: item })
              }
            >
              <View
                style={{
                  width: SIZES.width,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ImageBackground
                  source={item.thumbnail}
                  resizeMethod="resize"
                  style={{
                    justifyContent: "flex-end",
                    width: SIZES.width * 0.85,
                    height: SIZES.width * 0.85,
                  }}
                  imageStyle={{ borderRadius: 40 }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      height: 60,
                      width: "100%",
                      marginBottom: SIZES.radius,
                      paddingHorizontal: SIZES.radius,
                    }}
                  >
                    {/* play Now */}
                    <View
                      style={{
                        alignItems: "center",
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 20,
                          backgroundColor: COLORS.transparentWhite,
                          width: 35,
                          height: 35,
                        }}
                      >
                        <Image
                          source={icons.play}
                          resizeMethod="resize"
                          style={{
                            tintColor: COLORS.white,
                            width: 15,
                            height: 15,
                          }}
                        />
                      </View>
                              <Text
                          style={{
                              marginLeft: SIZES.base,
                            color: COLORS.white,
                            fontSize: SIZES.h3,
                          }}
                        >
                          Play Now
                        </Text>
                    </View>

                    {/* still Watching */}
                          {item.stillWatching.length >0 && 
                          
                          <View style={{
                              justifyContent:'center'
                          }}>

                              <Text style={{
                                  fontSize:SIZES.h4,
                                  color:COLORS.white
                              }}>
                                  Still Watching
                              </Text>

                              <Profiles  profiles={item.stillWatching}/>
                              </View>
                          }

                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    );
  }
function renderDots(){

    const dotPosition = Animated.divide(newSeasonScrollX, SIZES.width);


    return(
        <View style={{
            marginTop:SIZES.padding,
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row'
        }}>
{dummyData.newSeason.map((item,index)=>{
     const opacity = dotPosition.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [0.3, 1, 0.3],
                  extrapolate: "clamp",
                });
    
                const dotWidth = dotPosition.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [6,15,6],
                  extrapolate: "clamp",
                });
    
                const dotColor = dotPosition.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [COLORS.lightGray, COLORS.primary, COLORS.lightGray],
                  extrapolate: "clamp",
                });
    
    return(
    <Animated.View   key={index} style={{
        opacity:opacity,
        width:dotWidth,
        height:6,
        marginHorizontal:3,
        borderRadius:SIZES.radius,
        backgroundColor:dotColor
    }}>

        </Animated.View>
)})}
        </View>
    )
}

    function renderContinueWatchingSection(){
        return(
            <View style={{marginTop:SIZES.padding}}>
                {/* Header */}
                <View style={{
                    flexDirection:'row',
                    paddingHorizontal:SIZES.padding,
                    alignItems:'center'
                }}>
                    <Text style={{
                        fontSize:SIZES.h2,
                        color:COLORS.white,
                        flex:1
                    }}>Continue Watching</Text>
                <Image source={icons.right_arrow}
                    style={{height:18,width:18,tintColor:COLORS.primary}}
                    />
                </View>
                    
                {/* listScroll */}
<FlatList
horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.padding,
        }}
        data={dummyData.continueWatching}
        keyExtractor={(item) => `${item.name}`}
        renderItem={({item,index})=>{
            return(
                <TouchableWithoutFeedback
                onPress={()=>navigation.navigate("MovieDetail", {selectedMovie:item})}
h                >
                    <View style={{
                        marginLeft: index == 0? SIZES.padding:20,
                        marginRight:index ===dummyData.continueWatching.length -1 ? SIZES.padding:0
                    }}>
                        {/* Thumbnail */}
                        <Image source={item.thumbnail}  
                        resizeMode='cover'
                        style={{
                            borderRadius:20,
                            width:SIZES.width / 3,
                            height:(SIZES.width / 3) +20
                        }}
                        />
                        {/* Name */}
                        <Text style={{
                            marginTop:SIZES.base,color:COLORS.white,
                            fontSize:SIZES.h4
                        }}>
{item.name}
                        </Text>
                        {/* ProgressBar */}
                        <ProgressBar containerStyle={{
                            marginTop:SIZES.radius
                        }}
                        barStyle={{height:3}}
                        barPercentage={item.overallProgress}
                        />
                    </View>

                </TouchableWithoutFeedback>
            )
        }}
/>
            </View>
        )
    }

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.black, flex: 1 }}>
      {renterHeader()}

      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
        {renderNewSeasonSecion()}
        {renderDots()}
        {renderContinueWatchingSection()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
