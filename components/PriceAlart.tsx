import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, icons, SIZES } from "../constants";

const PriceAlart = (customContainerStyle) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.padding * 2,
        marginHorizontal: SIZES.padding,
        paddingHorizontal:SIZES.padding,
        paddingVertical:SIZES.padding,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        ...customContainerStyle,
        ...styles.shadow,
      }}
    >
      <Image
        source={icons.notification_color}
        style={{
          width: 25,
          height: 25,
        }}
      />
      <View style={{ flex: 1, marginLeft: SIZES.radius }}>
        <Text style={{ fontSize: SIZES.h2 }}>Set Price Alart</Text>
        <Text style={{ fontSize: SIZES.body4 }}>
          Get notified when your coins are moving
        </Text>
      </View>
        <Image source={icons.right_arrow}
        style={{
            width:20,
            height:20,
            tintColor:COLORS.gray
        }}
        />

    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default PriceAlart;
