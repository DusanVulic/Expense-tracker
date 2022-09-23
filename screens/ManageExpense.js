import React, { useLayoutEffect } from "react";

import { View, Text, StyleSheet } from "react-native";
//icons
import { FontAwesome5 } from "@expo/vector-icons";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "edit expense " : "add expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {};

  return (
    <View style={styles.container}>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <FontAwesome5
            name="trash"
            size={30}
            color="darkred"
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    // backgroundColor: "white",
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 16,

    borderTopColor: "gray",
    borderTopWidth: 1,
    alignItems: "center",
  },
});
export default ManageExpense;
