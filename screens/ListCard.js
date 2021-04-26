import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class ListCard extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          paddingHorizontal: 27,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#FFF",
          height: 182,
          elevation: 1,
          width: 270,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 20,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Bold",
              color: "#4b3ca7",
              fontSize: 20,
            }}
          >
            BOM
          </Text>

          <Text
            style={{
              fontSize: 20,
              color: "#a2a2db",
              paddingHorizontal: 14,
            }}
          >
            {" "}
            - - - - - - - - - -
          </Text>
          <Text
            style={{
              fontFamily: "Bold",
              color: "#4b3ca7",
              fontSize: 20,
            }}
          >
            DOH
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: -5,
            alignItems: "center",

          }}
        >
          <Text
            style={{
              fontFamily: "Regular",
              color: "#a2a2db",
              fontSize: 11,
            }}
          >
            Bombay
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontFamily: "Regular",
              color: "#a2a2db",
              paddingLeft: 140,
            }}
          >
           Doha
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Regular",
              color: "#522289",
              fontSize: 16,
            }}
          >
            09:00 AM
          </Text>

          <Text
            style={{
              fontFamily: "Regular",
              color: "#522289",
              paddingLeft: 70,
              fontSize: 16,
            }}
          >
            21:00 PM
          </Text>
        </View>

        <Text
          style={{
            fontFamily: "Regular",
            color: "#a2a2db",
            fontSize: 12,
          }}
        >
          20 June, 2021
        </Text>

        <Text
          style={{
            fontSize: 17,
            marginRight: -5,
            marginVertical: 8,
            color: "#a2a2db",
          }}
        >
          - - - - - - - - - - - - - - - - - - - - - - - - - - 
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: -8,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Regular",
              color: "#522289",
              fontSize: 16,
            }}
          >
           Total
          </Text>
          <Text
            style={{
              fontFamily: "Bold",
              color: "#4b3ca7",
              paddingLeft: 145,
              fontSize: 16,
            }}
          >
            $400
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}