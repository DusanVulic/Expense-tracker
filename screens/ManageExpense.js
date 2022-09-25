import React, { useLayoutEffect, useContext } from "react";

import { View, StyleSheet } from "react-native";
//icons
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../UI/Button";
import { ExpensesContext } from "../store/expenses-context";
//expense form component
import ExpenseForm from "../components/ExpenseForm";
import { storeExpense } from "../util/http";

const ManageExpense = ({ route, navigation }) => {
  const expenseCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expenseCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "edit expense " : "add expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    navigation.goBack();
    expenseCtx.deleteExpense(editedExpenseId);
  };

  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = (expenseData) => {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      storeExpense(expenseData);
      expenseCtx.addExpense(expenseData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? "update" : "add "}
        defaultValues={selectedExpense}
      />

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
