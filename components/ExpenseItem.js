import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { getFormatedDate } from "./../util/date";

const ExpenseItem = ({ description, date, amount }) => {
  const expensePressHandler = () => {
    console.log("klik");
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.date}>{getFormatedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },

  expenseItem: {
    padding: 12,
    marginTop: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: "gray",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.4,
  },
  description: {
    color: "green",
    fontSize: 16,
  },
  date: {
    marginTop: 5,
  },
  amountContainer: {
    marginRight: 10,
    justifyContent: "center",
  },
  amount: {
    color: "green",
    fontSize: 17,
  },
});
export default ExpenseItem;
