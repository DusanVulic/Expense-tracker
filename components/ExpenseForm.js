import React, { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";

//custom input component
import Input from "./Input";
//import button

import Button from "../UI/Button";
import { getFormatedDate } from "./../util/date";

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}) => {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? getFormatedDate(defaultValues.date) : "",
    description: defaultValues ? defaultValues.description : "",
  });

  const inputChangeHandler = (inputIndentifier, enteredValue) => {
    setInputValues((curInputValues) => {
      return { ...curInputValues, [inputIndentifier]: enteredValue };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date ";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert("invalid input", "please check your input values");
      return;
    }

    onSubmit(expenseData);
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Your expense :</Text>
      <Input
        label="amount"
        textInputConfig={{
          //   autoFocus: true,
          keyboardType: "numbers-and-punctuation",
          value: inputValues.amount,
          onChangeText: inputChangeHandler.bind(this, "amount"),
        }}
      />
      <Input
        label="date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          value: inputValues.date,
          onChangeText: inputChangeHandler.bind(this, "date"),
        }}
      />
      <Input
        label="description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          autoCapitalize: false,
          autoComplete: false,
          value: inputValues.description,
          onChangeText: inputChangeHandler.bind(this, "description"),
        }}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    paddingVertical: 10,

    marginTop: 5,
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
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
});

export default ExpenseForm;
