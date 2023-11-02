import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState(''); // Initialize taskText state

  const handleAddTask = () => {
    if (taskText) {
      addTask(taskText); // Call the addTask function with taskText as an argument
      setTaskText(''); // Clear the input field after adding the task
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)} // Update taskText state as the user types
        value={taskText} // Bind the input value to the taskText state
      />
      <Button title="Add Task"  onPress={() => addTask(taskText)} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#F4F4F4', // Change the background color
    borderRadius: 10, // Add border radius
    padding: 10, // Add padding
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    backgroundColor: 'white', // Change input background color
  },
  button: {
    backgroundColor: 'blue', // Change the button color
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});