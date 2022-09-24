import React, { useLayoutEffect, useContext } from "react";

import { View, StyleSheet } from "react-native";
//icons
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../UI/Button";
import { ExpensesContext } from "../store/expenses-context";
//expense form component
import ExpenseForm from "../components/ExpenseForm";

const ManageExpense = ({ route, navigation }) => {
  const expenseCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

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
  const confirmHandler = () => {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, {
        description: "test !!!",
        amount: 11.11,
        date: new Date("2022-09-04"),
      });
    } else {
      expenseCtx.addExpense({
        description: "test",
        amount: 99.99,
        date: new Date("2022-06-06"),
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "update" : "add"}
        </Button>
      </View>

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
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
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
