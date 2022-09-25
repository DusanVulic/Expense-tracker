import React, { useLayoutEffect, useContext, useState } from "react";

import { View, StyleSheet } from "react-native";
//icons
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../UI/Button";
import { ExpensesContext } from "../store/expenses-context";
//expense form component
import ExpenseForm from "../components/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../util/http";
import LoadingOverlay from "../UI/LoadingOverlay";
import ErrorOverlay from "../UI/ErrorOverlay";

const ManageExpense = ({ route, navigation }) => {
  const expenseCtx = useContext(ExpensesContext);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState();
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

  const deleteExpenseHandler = async () => {
    setIsSubmitting(true);

    try {
      await deleteExpense(editedExpenseId);
      expenseCtx.deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (error) {
      setError("could not delete expense, please try later");
      setIsSubmitting(false);
    }
  };

  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = async (expenseData) => {
    setIsSubmitting(true);

    try {
      if (isEditing) {
        expenseCtx.updateExpense(editedExpenseId, expenseData);
        await updateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expenseCtx.addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError("could not save data, please try again later");
      setIsSubmitting(false);
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  if (isSubmitting) {
    return <LoadingOverlay messager={error} />;
  }

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
