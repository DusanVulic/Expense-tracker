import React from "react";
import { Pressable, View, StyleSheet } from "react-native";

//icon
import { Entypo } from "@expo/vector-icons";

const IconButton = ({ icon, size, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Entypo name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  container: {
    marginRight: 20,
  },
});
export default IconButton;
