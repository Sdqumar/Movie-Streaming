import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, icons, SIZES } from "../constants";
const HeaderBar = ({ right }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back_arrow}
            resizeMethod="auto"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray,
              marginTop:5
            }}
          />
          <Text style={{ marginLeft: SIZES.base, fontSize: SIZES.h2 }}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
      {right && (
        <View
          style={{
            alignItems: "flex-end",
            flex: 1,
          }}
        >
          <TouchableOpacity>
            <Image
              source={icons.star}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HeaderBar;
