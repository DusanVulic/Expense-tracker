import React from "react";
import { FlatList, Text } from "react-native";

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Text>{item.description}</Text>;
      }}
    />
  );
};

export default ExpensesList;
