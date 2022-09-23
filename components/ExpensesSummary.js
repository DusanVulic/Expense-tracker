import React from "react";
import { View, Text, StyleSheet } from "react-native";

//icons
import { FontAwesome } from "@expo/vector-icons";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <View style={styles.moneyContainer}>
        <FontAwesome name="money" size={24} color="green" />
        <Text style={styles.header}>{periodName}</Text>
      </View>

      <Text style={styles.sumary}>$ {expensesSum.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "green",
  },
  moneyContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    color: "green",
    fontSize: 18,
    marginLeft: 10,
  },
  sumary: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ExpensesSummary;
