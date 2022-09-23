import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: "green",
    padding: 8,
  },
  flat: {
    backgroundColor: "transparent",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "green",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: "green",
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 4,
  },
});

export default Button;
