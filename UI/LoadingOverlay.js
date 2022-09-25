import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "white",
  },
});

export default LoadingOverlay;
