import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "./Button";

const ErrorOverlay = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>
        oooops...something went wrong
      </Text>
      <Text style={styles.text}> {message} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    padding: 24,
  },
  text: {
    textAlign: "center",
    marginBottom: 12,
    color: "darkred",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    width: 100,
    alignSelf: "center",
  },
});

export default ErrorOverlay;
