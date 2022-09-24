import React from "react";
import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <ExpenseItem
            description={item.description}
            date={item.date}
            amount={item.amount}
            id={item.id}
          />
        );
      }}
    />
  );
};

export default ExpensesList;
