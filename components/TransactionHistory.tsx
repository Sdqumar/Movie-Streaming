import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, icons, SIZES } from "../constants";

const TransactionHistory = ({ customComponentStyle, history }) => {
  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          paddingVertical: SIZES.base,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={icons.transaction}
          style={{
            tintColor: COLORS.primary,
            width: 25,
            height: 25,
          }}
        />

        <View
          style={{
            marginLeft: SIZES.radius,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: SIZES.h3 }}>{item.description}</Text>
          <Text style={{ color: COLORS.gray, fontSize: SIZES.body4 }}>
            {item.date}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: item.type == "B" ? COLORS.green : COLORS.black,
              fontSize: SIZES.h3,
            }}
          >
            {item.amount} {item.currency}
          </Text>
          <Image
            source={icons.right_arrow}
            style={{
              tintColor: COLORS.gray,
              width: 20,
              height: 20,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        padding: 20,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...customComponentStyle,
      }}
    >
      <Text style={{ fontSize: SIZES.h2 }}>Transaction History</Text>

      <View>
        {history?.map((item, index) => (
          <RenderItem item={item} key={index} />
        ))}
      </View>

      
    </View>
  );
};

export default TransactionHistory;
