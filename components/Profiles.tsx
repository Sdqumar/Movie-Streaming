import React from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../constants";

type props ={
profiles:
    {
    profile:ImageSourcePropType
}[]
}

export default ({ profiles }:props) => {


    if (profiles.length <=3) {
    return (
      <View style={styles.container}>
        {profiles.map((item, index) => (
          <View
            key={"profile-" + index}
            style={index == 0 ? null : { marginLeft: -15 }}
          >
            <Image source={item.profile} style={styles.profileImage} />
          </View>
        ))}
      </View>
    );
  } else {
      
      return (
          <View style={styles.container}>
        {profiles.map((item, index) => {
          if (index <= 2) {
            return (
              <View
                key={"profile-" + index}
                style={index == 0 ? null : { marginLeft: -15 }}
              >
                <Image source={item.profile} style={styles.profileImage} />
              </View>
            );
          }
        })}
        <Text
          style={{
            marginLeft: SIZES.base,
            fontSize: SIZES.h3,
            color: COLORS.white,
          }}
        >
          +{profiles.length - 3}
        </Text>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.black,
  },
});
